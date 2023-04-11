import React, { useEffect } from 'react'
import CreatePost from '../CreatePost';
import Post from '../Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../../redux/slices/postSlice';
import { useLocation } from 'react-router-dom';

function Feed({userId}) {
    // console.log('From Feed', userId);
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location)
    useEffect(() => {
        if(userId) {
            dispatch(getAllPost({
                userId 
            }));
        } 
    },[])
    const myPosts = useSelector((state) => state.postReducer.myPosts);
    const userPosts = useSelector((state) => state.postReducer.userPosts);
    const followingPosts = useSelector((state) => state.postReducer.followingPosts);
    const user = useSelector((state) => state.appConfigReducer.user);
    const ownerId = user._id;
    const posts = location.pathname == '/' ? followingPosts : location.pathname == `/profile/${ownerId}` ? myPosts : userPosts;
    
    console.log('User Posts : \n', posts);
    return (
        <>
            <CreatePost />
            {posts?.map((post) => {
                return (
                    <Post
                        id = {post?._id}
                        key = {post?._id}
                        caption = {post?.caption}
                        imgUrl = {`${post?.image?.url}`}
                        likes = {post?.likes}
                        comments = {post?.comments}
                    />
                );
            })}
        </>
    );
}

export default Feed;