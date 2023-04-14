import React, { useEffect } from 'react';
import Post from './Post';
import { axiosClient } from '../utils/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { setLikedPost } from '../redux/slices/postSlice';
import { fetchUserData } from '../redux/slices/userSlice';

function LikedPost() {
  let likedPost = useSelector(state => state.postReducer.likedPost)
  const dispatch = useDispatch();
  useEffect(async () => {
    const likedPostResponse = await axiosClient.get('/post/likedPosts');
    dispatch(setLikedPost(likedPostResponse.result));
    
  }, []);
  console.log("From LikedPost.jsx", likedPost);
  return (
    <>
      
      {likedPost?.map((post) => {
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

export default LikedPost