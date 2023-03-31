import React from 'react'
import CreatePost from '../CreatePost';
import Post from '../Post';

function Feed() {
    return (
        <>
            <CreatePost />
            <Post />
            <Post />
        </>
    );
}

export default Feed;