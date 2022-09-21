//color #1c1c1e
import '../styles/SideBar.css';
import socialSvg from '../assets/svg/social.svg';
import profileSvg from '../assets/svg/profile.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../app/store'
import { toggle, selectActivePage } from '../app/activePageSlicer';
import {useEffect} from 'react'

export default function SideBar(){
    const activePage = useAppSelector(selectActivePage)
    const dispatch = useAppDispatch();

    
    

    return (
        <div className="side-bar">

            <Link to="/">
                <div className={activePage === "MyPage" ? "side-bar-item side-item-active" : "side-bar-item"} onClick={()=>{
                    if(activePage === "Social"){
                        dispatch(toggle())
                    }
                }}>
                    <FontAwesomeIcon icon={faUser} style={{color: "#007aff", width: "2rem"}}  />
                    <div>My page</div>
                </div>
            </Link>
            
            <Link to="/social">
                <div  className={activePage === "Social" ? "side-bar-item side-item-active" : "side-bar-item"} onClick={()=>{
                    if(activePage === "MyPage"){
                        dispatch(toggle())
                    }
                }}>
                    <FontAwesomeIcon icon={faUserGroup} style={{color: "#007aff", width: "2rem"}} />
                    <div>Social</div>
                </div>
            </Link>
            
        </div>
    )
}