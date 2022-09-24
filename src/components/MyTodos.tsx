import '../styles/MyTodos.css';
import { getAllMyDocs } from '../app/firebase';
import { useEffect, useState } from 'react';
import { useAppSelector  } from '../app/store'
import { selectUserSlice } from '../app/slicers/userSlicer';
import TodoComponent from './Todo';

export interface Todo {
    id: string,
    todo: string,
    expirationDate: Date,
    notificationDate: Date,
    privacy: string,
}

export default function MyTodosList(){

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
                return (
                    <TodoComponent todo={todo}/>
                )
            })}
        </div>
    )
}