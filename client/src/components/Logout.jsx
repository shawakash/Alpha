import React, { useEffect } from 'react'
import { KEY_ACCESS_TOKEN, getItem, removeItem } from '../utils/localStorageManager';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToast } from '../redux/slices/appConfigSlice';
import { TOAST_ERROR, TOAST_JSX, TOAST_SUCCESS } from '../App';

function Logout() {
    const user = useSelector(state => state.appConfigReducer.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        
        if(!getItem(KEY_ACCESS_TOKEN)) {
            dispatch(setToast({
                type: TOAST_ERROR,
                message: 'You are not logged in :('
            }));
            navigate('/login');
        }
        removeItem(KEY_ACCESS_TOKEN);
        dispatch(setToast({
            type: TOAST_SUCCESS,
            message: 'Loggout'
        }));
        navigate('/login');
    }, [])

    return (
        <></>
    )
}

export default Logout;