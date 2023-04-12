import React, { useEffect } from 'react';
import ListCard from './ListCard';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { newsPost } from '../redux/slices/newsSlice';

function SideBar() {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.newsReducer.news);
    const fetchArticles = news.articles;
    const user = useSelector((state) => state.appConfigReducer.user);
    const userFetchStatus = useSelector((state) => state.newsReducer.status);
    // console.log(fetchArticles);
    const articles = [];
    if(userFetchStatus == 'success' ) {
        for(let i=0; i<3; i++) {
            const randomIndex = Math.floor(Math.random()*25) + 1;
            articles[i] = fetchArticles[randomIndex];
        }
    }
    return (
        <div className="sideBar flex flex-col gap-y-10 sticky top-0">
            <div className="news flex flex-col gap-y-6 bg-transparent backdrop-blur-lg w-fit py-4 rounded-lg border-slate-500 border-[0.25px] px-10">
                <div className="heading text-xl text-slate-50 font-rob font-semibold tracking-widest">
                    Trending Stories
                </div>
                <div className="news flex flex-col gap-y-2">
                {fetchArticles ? articles.map((article) => {
                        return (
                            <ListCard
                                id={article.title}
                                key={article.title}
                                avatar={article.urlToImage}
                                name={article.source.name}
                                email={article.title}
                                linkId = {article.url}
                            />);
                    }) : <></> }
                </div>
            </div>
            <div className="friends flex flex-col gap-y-6 bg-transparent backdrop-blur-lg w-fit py-4 rounded-lg border-slate-500 border-[0.25px] px-10">
                <div className="heading text-xl text-slate-50 font-rob font-semibold tracking-widest">
                    My Friends
                </div>
                <div className="news flex flex-col gap-y-2">
                    {user?.followings?.map((following) => {
                        return (
                            <ListCard
                                id={following._id}
                                key={following._id}
                                avatar={following.avatar}
                                name={following.name}
                                email={following.email}
                                linkId={`/profile/${following._id}`}
                            />);
                    })}
                </div>
            </div>
            <div className="random flex flex-col gap-y-6 bg-transparent backdrop-blur-lg w-fit py-4 rounded-lg border-slate-500 border-[0.25px] px-10">
                <div className="heading text-xl text-slate-50 font-rob font-semibold tracking-widest">
                    Suggested
                </div>
                <div className="news flex flex-col gap-y-2">
                    {/* {user?.followings?.map((following) => {
                        return (
                            following.followings?.map((secondLayerFollowing) => {
                                return (
                                    user._id != secondLayerFollowing._id ? 
                                    <ListCard
                                        id={secondLayerFollowing._id}
                                        key={secondLayerFollowing._id}
                                        name={secondLayerFollowing.name}
                                        avatar={secondLayerFollowing.avatar}
                                        email={secondLayerFollowing.email}
                                        linkId={`/profile/${secondLayerFollowing._id}`}
                                    /> : ''
                                );
                            })
                        );
                    })} */}
                    <ListCard 
                        name = {'Akash'}
                        email = {'a.shaw@iitg.ac.in'}
                    />
                    <ListCard 
                        name = {'Akash'}
                        email = {'a.shaw@iitg.ac.in'}
                    />
                    <ListCard 
                        name = {'Akash'}
                        email = {'a.shaw@iitg.ac.in'}
                    />

                </div>
            </div>
        </div>

    );
}

export default SideBar;