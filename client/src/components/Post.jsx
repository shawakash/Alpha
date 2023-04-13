import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai';

import { FaRegComment, FaRegComments } from 'react-icons/fa';
import ListCard from './ListCard';
import { useDispatch } from 'react-redux';
import { getAllPost, getMyPost, likeAndUnlikePost } from '../redux/slices/postSlice';
import { fetchData } from '../redux/slices/appConfigSlice';

function Post(props) {
    let likes = props.likes;
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    function handleClick() {
        dispatch(likeAndUnlikePost({
            postId: props.id
        }));
        dispatch(fetchData());
        dispatch(getAllPost({
            userId: props.owner._id
        }));
        dispatch(getMyPost());
    }
    return (
        <div className="bg-slate-900 bg-transparent backdrop-blur-lg text-slate-200 flex flex-col px-10 py-5 w-full rounded-lg border-slate-500 border-[0.25px] gap-y-3">
            <ListCard
                id={props.owner._id}
                key={props.owner._id}
                linkId={`/profile/${props.owner._id}`}
                avatar={props.owner.avatar}
                name={props.owner.name}
                email={props.owner.email}
            />
            <div className="caption w-fit text-xl">
                {props.caption}
            </div>
            <div className="img">
                {props.imgUrl ? <img
                    src={props.imgUrl}
                    className="w-full rounded-3xl"
                /> : <></>}
            </div>
            <div className="utilities flex items-center justify-between text-lg mt-2 px-2">
                <button
                    onClick={handleClick}
                    className="flex gap-x-2 items-center">
                    <AiFillLike size={25}
                    />
                    {props.likes.length} Like</button>
                <button className="flex gap-x-2 items-center"><FaRegComments />Comment</button>
                <button className="flex gap-x-2 items-center"><FaRegComments /> Not Defined</button>
            </div>
        </div>
    );
}

export default Post;