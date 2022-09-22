import GoogleIcon from '../../assets/svg/google-icon.svg';
import {signInGooglePopup} from '../../app/firebase';
import { set } from '../../app/slicers/userSlicer';
import { useAppDispatch } from '../../app/store';
import { set as setError } from '../../app/slicers/errorSlicer'
export default function GoogleSignInButton(){

    const dispatch = useAppDispatch();

    const handleSignIn = ()=>{
        signInGooglePopup().then((userInfo) => {
            if(userInfo){
                console.log(userInfo.name);
                dispatch(set({
                    uid: userInfo.uid,
                    name: userInfo.name,
                }))
            }
            
        }).catch((e: Error)=>{
            if(e.message.includes('account-exists-with-different-credential')){
                dispatch(setError({
                    active: true,
                    message: 'This account is already linked to another account',
                }))
            } else {
                dispatch(setError({
                    active: true,
                    message: 'An error occured signing in',
                }))
            }
            
            
        })
    }


    return(
        <img className="googleSignInButton" src={GoogleIcon} onClick={handleSignIn}/>
    )
}