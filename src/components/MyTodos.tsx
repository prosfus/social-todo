import '../styles/MyTodos.css';
import { getAllMyDocs } from '../app/firebase';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch  } from '../app/store'
import {set, selectTodoSlice} from '../app/slicers/todoSlicer'
import { selectUserSlice } from '../app/slicers/userSlicer';
import TodoComponent from './Todo';

export interface Todo {
    id: string,
    todo: string,
    expirationDate: string,
    notificationDate: string,
    privacy: string,
}

//called at login


export default function MyTodosList(){
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUserSlice);
    const todos = useAppSelector(selectTodoSlice);
    //const [todos, setTodos] = useState([] as Todo[])

    useEffect(()=>{
        getAllMyDocs(user.uid).then((docs)=>{
            dispatch(set(docs))
            //setTodos(docs);
        })
    },[])

    /* useEffect(()=>{
        //console.log(todos);
    },[todos])
 */
    return (
        <div className="todos-container">
            {todos.map((todo, idx)=>{
                return (
                    <TodoComponent key={idx} todo={todo}/>
                )
            })}
        </div>
    )
}