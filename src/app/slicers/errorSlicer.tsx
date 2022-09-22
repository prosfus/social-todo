import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface ErrorType {
    active: boolean,
    message: string,
  }

interface ErrorState {
    value: ErrorType,
}

const initialState: ErrorState = {
    value: {
        active: false,
        message: '',
    },
}


export const errorSlice = createSlice({
    name: 'errorState',
    initialState,
    reducers: {
       set: (state, action: PayloadAction<ErrorType> ) => {
            state.value = {
                
                active: action.payload.active,
                message: action.payload.message,
                
            }
        },
    }
})

export const {set} = errorSlice.actions;
export const selectErrorSlice = (state: RootState) => state.errorState.value;

export default errorSlice.reducer