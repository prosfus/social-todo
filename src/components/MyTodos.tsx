import '../styles/MyTodos.css';
import { db, getMyPublicDocs, getMyPrivateDocs, getAllMyDocs } from '../app/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc, query} from "firebase/firestore";
import { useAppSelector, useAppDispatch  } from '../app/store'
import { set, selectUserSlice, UserInfo } from '../app/slicers/userSlicer';

export interface Todo {
    todo: string,
    expirationDate: Date,
    notificationDate: Date,
    privacy: string,
}

export default function MyTodos(){

    const user = useAppSelector(selectUserSlice);
    const [todos, setTodos] = useState([] as Todo[]);

    useEffect(()=>{
        getAllMyDocs(user.uid).then((docs)=>{
            setTodos(docs);
        })
    },[])

    useEffect(()=>{
        console.log(todos);
    },[todos])

    return (
        <div className="todos-container">
            {todos.map((todo)=>{
                return (<div>
                    <div>{todo.todo}</div>
                    
                    <div>{todo.privacy}</div>
                </div>)
            })}
        </div>
    )
}