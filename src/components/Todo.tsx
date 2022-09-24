import { Todo } from './MyTodos'
import '../styles/Todo.css'
import {useState} from 'react';
import expirationSvg from '../assets/svg/time-left.svg';
import notificationSvg from '../assets/svg/notification.svg';

type TodoProps = {
    todo: Todo;
}



export default function TodoComponent(props: TodoProps){
    /* const expMonth = props.todo.expirationDate.getMonth()+1; */
    /* const notMonth = props.todo.notificationDate.getMonth()+1; */
    /* const expDate = props.todo.expirationDate.getDate() + '/' + expMonth + '/' + props.todo.expirationDate.getFullYear(); */
    /* const notDate = props.todo.notificationDate.getDate() + '/' + notMonth + '/' + props.todo.notificationDate.getFullYear(); */
    const [checked, setChecked] = useState(false);


    return(
        <div className="todo-component">
            <div className="todo-checkbox-container">
                <div onClick={()=>{setChecked(!checked)}} className={checked ? 'todo-checkbox todo-checked' : 'todo-checkbox'}></div>
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
                        <img className="white-svg todo-svg" src={notificationSvg} alt="expiration date"/>
                        <div className="todo-info-expiration-text">{props.todo.notificationDate}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}