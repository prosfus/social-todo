import GitHubIcon from '../../assets/svg/github-icon.svg';
import { signInGitHubPopup } from '../../app/firebase';
import { useAppDispatch } from '../../app/store';
import { set } from '../../app/slicers/userSlicer';
import { set as setError } from '../../app/slicers/errorSlicer'


export default function GithubSignInButton(){
    const dispatch = useAppDispatch();
    

    const handleSignIn = ()=>{
        signInGitHubPopup().then((userInfo) => {
            if(userInfo && userInfo.email){
                console.log('a');
                dispatch(set({
                    uid: userInfo.uid,
                    name: userInfo.name,
                    email: userInfo.email,
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
        <img className="githubSignInButton" src={GitHubIcon} onClick={handleSignIn}/>
    )
}