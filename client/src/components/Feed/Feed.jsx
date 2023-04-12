import React, { useEffect } from 'react'
import CreatePost from '../CreatePost';
import Post from '../Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, getMyPost } from '../../redux/slices/postSlice';
import { useLocation } from 'react-router-dom';
import { fetchData } from '../../redux/slices/appConfigSlice';

function Feed() {
    // console.log('From Feed', userId);
    const dispatch = useDispatch();
    const location = useLocation();
    const userId = (location.pathname.split('/'))[2];
    console.log(location)
    useEffect(() => {
        if (userId) {
            dispatch(getAllPost({
                userId
            }));
        }
        dispatch(getMyPost());
    }, [])
    const user = useSelector((state) => state.appConfigReducer.user);
    // const userFetchStatus = useSelector((state) => state.appConfigReducer.status);
    const myPosts = useSelector((state) => state.postReducer.myPosts);
    const followingPosts = []        // useSelector((state) => state.postReducer.followingPosts);
    user.followings.forEach((following) => {
        following.post.map(post => followingPosts.push(post))
    });
    const userPosts = useSelector((state) => state.postReducer.userPosts);
    const userPostFetchStatus = useSelector(state => state.postReducer.status);
    console.log(userPosts)
    const ownerId = user._id;
    if ((userPostFetchStatus == 'success' || !userId)) {
        const posts = location.pathname == '/' ? followingPosts : location.pathname == `/profile/${ownerId}` ? myPosts : userPosts;
        console.log('User Posts : \n', posts);
        return (
            <>
                {location.pathname == `/profile/${ownerId}` ? <CreatePost /> : ''}
                {posts?.map((post) => {
                    return (
                        <Post
                            id={post._id}
                            key={post._id}
                            caption={post.caption}
                            imgUrl={post.image?.url ? `${post?.image?.url}` : ''}
                            likes={post.likes}
                            comments={post.comments}
                            owner={post.owner}
                        />
                    );
                })}
            </>
        );
    }

}

export default Feed;