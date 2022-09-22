import '../styles/MyTodos.css';
import { db } from '../app/firebase';
import { useEffect } from 'react';
import { collection, getDocs, doc, getDoc} from "firebase/firestore";

export default function MyTodos(){

    useEffect(()=>{
       const docRef = doc(db, '/users/ReTsYwltyARaXYDOvkulDSsmIjl2');
       const d = getDoc(docRef).then((a)=>{
            console.log(a.data());
            
       })

    },[])

    return (
        <div className="todos-container">
            MINE
        </div>
    )
}