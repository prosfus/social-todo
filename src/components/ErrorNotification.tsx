import { useAppSelector, useAppDispatch } from '../app/store'
import { selectErrorSlice } from '../app/slicers/errorSlicer';
import {useEffect} from 'react'
import { set as setError } from '../app/slicers/errorSlicer'

export default function ErrorNotification(){

    const error = useAppSelector(selectErrorSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(error.active){
            setTimeout(() => {
                dispatch(setError({
                    active: false,
                    message: '',
                }))
            }, 3000);
        }   
    
    }, [error.active])

    return(
        <div className={error.active ? "error-notification" : "hidden"}>
            <div className="error-body">
                {error.message}
            </div>
        </div>
    )
}