import TopBar from '../components/TopBar'
import '../styles/Landing.css'
import GoogleSignInButton from '../components/signIn/googleSignInButton'
import GithubSignInButton from '../components/signIn/githubSignInButton'
import { set, selectUserSlice } from '../app/slicers/userSlicer';
import { useAppSelector, useAppDispatch } from '../app/store'
import { useEffect } from 'react'
import { Navigate } from "react-router-dom";
import ErrorNotification from '../components/ErrorNotification';

export default function Landing(){
    const user = useAppSelector(selectUserSlice);
    const dispatch = useAppDispatch();

    useEffect(() =>{
        const uid = localStorage.getItem('uid')?.replaceAll('"', '');
        if(uid){
            const name = localStorage.getItem('name')?.replaceAll('"', '');
            const email = localStorage.getItem('email')?.replaceAll('"', '');
            dispatch(set({
                uid: uid,
                name: name ? name : '',
                email: email ? email : '',
            }))
        }
    },[])

    return (
        <div>
            {user.uid != '' && <Navigate to="/mypage"/>}
            <TopBar/>
            <div className="landing-body">
                <h1 className="landing-text">
                    Create, manage <br/> and share your <br/>  todos
                </h1>
                <div className="landing-signin-container">
                    <GoogleSignInButton/>
                    <GithubSignInButton/>
                    <div>{user.uid}</div>
                </div>
            </div>
            <ErrorNotification/>
        </div>


    )
}