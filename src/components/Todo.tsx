import { Todo } from './MyTodos'
import '../styles/Todo.css'
import {useState} from 'react';
import expirationSvg from '../assets/svg/time-left.svg';
import privacySvg from '../assets/svg/privacy.svg';
import {remove} from '../app/slicers/todoSlicer';
import {selectUserSlice} from '../app/slicers/userSlicer';
import {useAppDispatch, useAppSelector} from '../app/store';
import {deleteTodo} from '../app/firebase'

type TodoProps = {
    todo: Todo;
}



export default function TodoComponent(props: TodoProps){
    const user = useAppSelector(selectUserSlice);
    const [checked, setChecked] = useState(false);
    const privacyString = props.todo.privacy == 'public' ? 'Public' : 'Private';
    const dispatch = useAppDispatch();
    const handleDelete = () =>{
        dispatch(remove(props.todo.id));
        deleteTodo(user.uid, props.todo.id);
    }


    return(
        <div className="todo-component">
            <div className="todo-checkbox-container">
                <div onClick={()=>{handleDelete()}} className={checked ? 'todo-checkbox todo-checked' : 'todo-checkbox'}></div>
            </div>
            <div className="todo-info">
                <div className="todo-info-top">
                    {props.todo.todo}
                </div>
                <div className="todo-info-bottom">
                    <div className="todo-info-bottom-item">
                        <img className="white-svg todo-svg" src={expirationSvg} alt="expiration date"/>
                        <div className="todo-info-expiration-text">{props.todo.expirationDate}</div>
                    </div>
                    <div className="todo-info-bottom-item">
                        <img className="white-svg todo-svg" src={privacySvg} alt="expiration date"/>
                        <div className="todo-info-expiration-text">{privacyString}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}