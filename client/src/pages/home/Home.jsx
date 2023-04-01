import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import CreatePost from '../../components/CreatePost';
import HNavbar from '../../components/HNavbar';
import Post from '../../components/Post';
import SideBar from '../../components/SideBar';
import VNavbar from '../../components/VNavbar';
import { axiosClient } from '../../utils/axiosClient';
import './home.css';
import { fetchData } from '../../redux/slices/appConfigSlice';
import { getAllPost } from '../../redux/slices/postSlice';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, []);
    return (
        <div className="home flex bg-transparent text-slate-200">
            <VNavbar />
            <div className="main w-screen">
                <HNavbar />
                <div className="body flex p-10 w-full gap-x-10">
                    <div className="subBody1 w-4/5 flex flex-col gap-y-7">
                    
                        <Outlet />
                    </div>
                    <div className="subBody2 w-1/5 flex flex-col items-center">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;