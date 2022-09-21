import { createSlice } from '@reduxjs/toolkit';
import {RootState} from './store';

interface ActivePageState {
    value: string
  }

const initialState: ActivePageState = {
    value: 'MyPage'
}

export const ActivePageSlice = createSlice({
    name: 'activePage',
    initialState,
    reducers: {
       toggle: state => {
            if (state.value === 'MyPage'){
                state.value = 'Social'
            } else {
                state.value = 'MyPage'
            }
        },
    }
})

export const {toggle} = ActivePageSlice.actions;
export const selectActivePage = (state: RootState) => state.activePage.value;

export default ActivePageSlice.reducer