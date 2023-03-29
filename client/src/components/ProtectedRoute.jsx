import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/login/Login';
import { getItem, KEY_ACCESS_TOKEN } from '../utils/localStorageManager';

function ProtectedRoute() {
    const user = getItem(KEY_ACCESS_TOKEN);
    return (
        <>
            {user ? <Outlet /> : <Navigate to='/login'/>}
        </>
    );
}

export default ProtectedRoute;