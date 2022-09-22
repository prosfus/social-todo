import '../styles/TopBar.css';
import { useAppSelector, useAppDispatch  } from '../app/store'
import { set, selectUserSlice, UserInfo } from '../app/slicers/userSlicer';
import dropdown from '../assets/svg/dropdown.svg';
import logoutsvg from '../assets/svg/logout.svg'
import { useState } from 'react';
import { Navigate } from "react-router-dom";

export default function TopBar(){
    const user = useAppSelector(selectUserSlice);
    const dispatch = useAppDispatch();
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [navigate, setNavigate] = useState(false);

    const logOut = ()=>{
        setDropdownOpened(false);
        localStorage.removeItem('uid');
        localStorage.removeItem('name');
        dispatch(set({uid: '', name: ''}));
        setNavigate(true);
    }

    return (
        <div className="top-bar">
           <div>Social To-Do</div>
           {user.uid && 
           <div className="dropdown" onClick={()=>{setDropdownOpened(!dropdownOpened)}}>
           {user.name != '' ? user.name : 'Settings'} <img className="white-svg" src={dropdown}/>
           {dropdownOpened &&
               <div className="dropdown-menu">
                   <div className="flex-row logout" onClick={logOut}><img className="white-svg" src={logoutsvg}/> Logout</div>
               </div>
           }
          </div>
           }
              {navigate && <Navigate to="/" />}
        </div>
    )
}