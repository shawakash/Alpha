import React, { useEffect } from 'react'
import CreatePost from '../CreatePost';
import Post from '../Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../../redux/slices/postSlice';

function Feed({userId}) {
    const dispatch = useDispatch();     
    useEffect(() => {
        dispatch(getAllPost({
            userId
        }));
    },[])
    const posts = useSelector(state => state.postReducer.posts);
    console.log('User Posts : \n', posts);
    return (
        <>
            <CreatePost />
            {posts.map((post) => {
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