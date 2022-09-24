import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc,deleteDoc, query} from "firebase/firestore";
import {Todo} from '../components/MyTodos';
import { useAppDispatch } from "./store";
import {set} from './slicers/todoSlicer'

const firebaseConfig = {
  apiKey: "AIzaSyBmbvbXuKpfN96AEJe8h8FOLvXjNS9Ie9Y",
  authDomain: "social-todo-c71db.firebaseapp.com",
  projectId: "social-todo-c71db",
  storageBucket: "social-todo-c71db.appspot.com",
  messagingSenderId: "992657969778",
  appId: "1:992657969778:web:3c8e3235edf5925cd528eb",
  measurementId: "G-SK70W2P341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const signInGooglePopup = ()=>{
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
    .then((result)=>{
        setLocalStorage(result.user.uid, result.user.displayName, result.user.email);
        return {uid: result.user.uid, name: result.user.displayName, email: result.user.email}
    })
    
}


export const signInGitHubPopup = ()=>{
    const provider = new GithubAuthProvider();

    return signInWithPopup(auth, provider)
        .then((result)=>{
            setLocalStorage(result.user.uid, result.user.displayName, result.user.email)
            return {uid: result.user.uid, name: result.user.displayName, email: result.user.email}
        })
    
}

function setLocalStorage(uid: string, name: string | null, email: string | null){
    localStorage.setItem('uid', uid);
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('email', JSON.stringify(email));
}

export const db = getFirestore(app);


export async function  getMyPublicDocs(uid: string){
    let todos = [] as Todo[];

    await getDocs(collection(db, 'users/'+ uid+'/public')).then((res)=>{
        if(res.docs.length > 0) {
            res.forEach((doc)=>{
                
                todos.push({
                    id: doc.id,
                    todo: doc.data().todo,
                    expirationDate: doc.data().expirationDate.toDate().toLocaleString(),
                    privacy: 'public',
                })
               
            })
        }
    })
    return todos;
}

export async function  getMyPrivateDocs(uid: string){
    let todos = [] as Todo[];

    await getDocs(collection(db, 'users/'+ uid+'/private')).then((res)=>{
        if(res.docs.length > 0) {
            res.forEach((doc)=>{
                console.log(typeof doc.data().expirationDate);
                
                todos.push({
                    id: doc.id,
                    todo: doc.data().todo,
                    expirationDate: doc.data().expirationDate.toDate().toLocaleString(),
                    privacy: 'private',
                })
               
            })
        }
    })
    return todos;
}

export async function getAllMyDocs(uid: string){
    let t = [] as Todo[];
    let pub = await getMyPublicDocs(uid);
    let priv = await getMyPrivateDocs(uid);
    return pub.concat(priv);
}

export async function getAndSetTodos(uid: string){
    
    getAllMyDocs(uid).then((docs)=>{
        localStorage.setItem('docs', JSON.stringify(docs));
    })
}

export function deleteTodo(uid: string, id: string){
    deleteDoc(doc(db, 'users/'+uid+'/public', id));
    deleteDoc(doc(db, 'users/'+uid+'/private', id));
}