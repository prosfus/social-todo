import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


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
const auth = getAuth(app);
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