import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import CreatePost from '../../components/CreatePost';
import HNavbar from '../../components/HNavbar';
import Post from '../../components/Post';
import SideBar from '../../components/SideBar';
import VNavbar from '../../components/VNavbar';
import { axiosClient } from '../../utils/axiosClient';
import './home.css';
import { fetchData } from '../../redux/slices/appConfigSlice';
import { getAllPost, followingPost, getMyPost } from '../../redux/slices/postSlice';
import { Spin } from 'antd';
import { newsPost } from '../../redux/slices/newsSlice';

function Home() {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location)
    const user = useSelector((state) => state.appConfigReducer.user);
    useEffect(() => {
        dispatch(fetchData());
        dispatch(newsPost());
        dispatch(getMyPost());
        window.scrollTo(0,0);
    }, []);
    const newsFetchStatus = useSelector((state) => state.newsReducer.status);
    const userFetchStatus = useSelector((state) => state.appConfigReducer.status);
    const postFetchStatus = useSelector((state) => state.postReducer.status);
    const newsFetchError = useSelector((state) => state.newsReducer.error);
    const fetchError = useSelector((state) => state.appConfigReducer.error);
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 90,
            }}
            spin
        />
    );
    const news = useSelector((state) => state.newsReducer.news);
    if (userFetchStatus == 'loading' || newsFetchStatus == 'loading' ) {
        return <div className="flex flex-col justify-center my-52"><Spin indicator={antIcon} /></div>
    }

    if (userFetchStatus == 'failed' && newsFetchStatus == 'failed') {
        return <div className="flex flex-col justify-center my-52 mx-96">{fetchError}</div>
    } if (userFetchStatus == 'success' && newsFetchStatus == 'success') {
        // console.log(user);
        // console.log(news);
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
    );
    }
}

export default Home;