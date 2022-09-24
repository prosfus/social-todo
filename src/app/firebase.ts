import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc, query} from "firebase/firestore";
import {Todo} from '../components/MyTodos';


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
        localStorage.setItem('uid', JSON.stringify(result.user.uid));
        localStorage.setItem('name', JSON.stringify(result.user.displayName));
        localStorage.setItem('email', JSON.stringify(result.user.email));
        return {uid: result.user.uid, name: result.user.displayName, email: result.user.email}
    })
    
}


export const signInGitHubPopup = ()=>{
    const provider = new GithubAuthProvider();

    return signInWithPopup(auth, provider)
        .then((result)=>{
            localStorage.setItem('uid', result.user.uid);
            localStorage.setItem('name', JSON.stringify(result.user.displayName));
            localStorage.setItem('email', JSON.stringify(result.user.email));
            return {uid: result.user.uid, name: result.user.displayName, email: result.user.email}
        })
    
}

export const db = getFirestore(app);


export async function  getMyPublicDocs(uid: string){
    let todos = [] as Todo[];

    await getDocs(collection(db, 'users/'+ uid+'/public')).then((res)=>{
        if(res.docs.length > 0) {
            res.forEach((doc)=>{
                console.log(doc.id);
                
                todos.push({
                    id: doc.id,
                    todo: doc.data().todo,
                    expirationDate: doc.data().expirationDate.toDate(),
                    notificationDate: doc.data().notificationDate.toDate(),
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
                todos.push({
                    id: doc.id,
                    todo: doc.data().todo,
                    expirationDate: doc.data().expirationDate.toDate(),
                    notificationDate: doc.data().notificationDate.toDate(),
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