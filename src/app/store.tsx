import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import CounterReducer from './slicers/testSlice'
import ActivePageReducer from './slicers/activePageSlicer'
import UserInfoReduceer from './slicers/userSlicer';
import ErrorStateReducer from './slicers/errorSlicer';

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        activePage: ActivePageReducer,
        userInfo: UserInfoReduceer,
        errorState: ErrorStateReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch




// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector