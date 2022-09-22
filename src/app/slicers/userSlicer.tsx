import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface UserInfo {
    uid: string,
    name: string | null,
    email: string,
  }

interface UserState {
    value: UserInfo,
}

const initialState: UserState = {
    value: {
        uid: '',
        name: '',
        email: '',
    },
}


export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
       set: (state, action: PayloadAction<UserInfo> ) => {
            state.value = {
                
                uid: action.payload.uid,
                name: action.payload.name,
                email: action.payload.email,
            }
        },
    }
})

export const {set} = userSlice.actions;
export const selectUserSlice = (state: RootState) => state.userInfo.value;

export default userSlice.reducer