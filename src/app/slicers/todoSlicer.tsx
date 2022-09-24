import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Todo} from '../../components/MyTodos'



interface TodoState {
    value: Todo[],
}

const initialState: TodoState = {
    value: [],
}


export const todoSlice = createSlice({
    name: 'todoState',
    initialState,
    reducers: {
       set: (state, action: PayloadAction<Todo[]>)=>{
            let t: Todo[] = action.payload.map((todo: Todo) =>{
                return  {
                    ...todo,
                    expirationDate: todo.expirationDate,
                }
            })
            state.value = t;   
       },
       remove: (state, action: PayloadAction<string>)=>{
              state.value = state.value.filter((todo: Todo)=>{
                return todo.id !== action.payload;
              })
       }
    }
})

export const {set, remove} = todoSlice.actions;
export const selectTodoSlice = (state: RootState) => state.todoState.value;

export default todoSlice.reducer