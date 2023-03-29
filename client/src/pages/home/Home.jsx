import React, { useEffect } from 'react';
import CreatePost from '../../components/CreatePost';
import HNavbar from '../../components/HNavbar';
import Post from '../../components/Post';
import VNavbar from '../../components/VNavbar';
import { axiosClient } from '../../utils/axiosClient';

function Home() {
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {
        try {
            const response = await axiosClient.get('/post/all');
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
                <div className="body flex p-10 w-full">
                    <div className="subBody1 w-3/5 flex flex-col gap-y-7">
                    <CreatePost />
                    <Post /> 
                    <Post /> 
                    </div>
                    <div className="subBody2 w-2/5">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;