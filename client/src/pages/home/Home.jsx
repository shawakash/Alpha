import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreatePost from '../../components/CreatePost';
import HNavbar from '../../components/HNavbar';
import Post from '../../components/Post';
import SideBar from '../../components/SideBar';
import VNavbar from '../../components/VNavbar';
import { axiosClient } from '../../utils/axiosClient';

function Home() {
    const user = useSelector((state) => state.userReducer.user);
    
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {
        try {
            const response = await axiosClient.get('/post/all');
            const User = await axiosClient.get('/user/profile');
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="home flex  text-slate-200">
            <VNavbar />
            <div className="main w-screen">
                <HNavbar />
                <div className="body flex p-10 w-full gap-x-10">
                    <div className="subBody1 w-4/5 flex flex-col gap-y-7">
                    <CreatePost />
                    <Post /> 
                    <Post /> 
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