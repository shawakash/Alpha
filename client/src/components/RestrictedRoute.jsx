import React, { useEffect } from 'react'
import { KEY_ACCESS_TOKEN, getItem } from '../utils/localStorageManager';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Alert } from 'antd';

function RestrictedRoute() {
    const user = getItem(KEY_ACCESS_TOKEN);
    const navigate = useNavigate();
    return (
        <>{user? <Navigate to='/' state={'login'}/> : <Outlet />}</>
    );
}

export default RestrictedRoute