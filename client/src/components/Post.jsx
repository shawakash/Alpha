import React, { useState } from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

import { FaRegComment, FaRegComments } from 'react-icons/fa';
import ListCard from './ListCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, getMyPost, likeAndUnlikePost } from '../redux/slices/postSlice';
import { fetchData, setToast } from '../redux/slices/appConfigSlice';
import { TOAST_SUCCESS } from '../App';

function Post(props) {
    let likes = props.likes;
    const dispatch = useDispatch();
    const user = useSelector(state => state.appConfigReducer.user);
    const [liked, setLiked] = useState(false);
    function handleClick() {
        // dispatch(setToast({
        //     type: TOAST_SUCCESS,
        //     message: `Post ${props?.likes.includes(user?._id) ? 'Unliked' : 'Liked'}`
        // }))
        dispatch(likeAndUnlikePost({
            postId: props?.id
        }));
        dispatch(fetchData());
        dispatch(getAllPost({
            userId: props?.owner?._id
        }));
        dispatch(getMyPost());
    }
    return (
        <div className="bg-slate-900 bg-transparent backdrop-blur-lg text-slate-200 flex flex-col px-10 py-5 w-full rounded-lg border-slate-500 border-[0.25px] gap-y-3">
            <ListCard
                id={props?.owner?._id}
                key={props?.owner?._id}
                linkId={`/profile/${props?.owner?._id}`}
                avatar={props?.owner?.avatar}
                name={props?.owner?.name}
                email={props?.owner?.email}
            />
            <div className="caption w-fit text-xl">
                {props?.caption}
            </div>
            <div className="img">
                {props?.imgUrl ? <img
                    src={props?.imgUrl}
                    className="w-full rounded-3xl"
                /> : <></>}
            </div>
            <div onClick={handleClick} className="utilities flex items-center justify-between text-lg mt-2 px-2">
                <button
                    
                    className="flex gap-x-2 items-center italic font-mon">
                    {props?.likes?.includes(user?._id) ? <AiFillLike color='#2DD4BF' size={25}
                    /> : <AiOutlineLike size={25} />}
                    {props?.likes?.length} Likes</button>
                <button className="flex gap-x-2 items-center"><FaRegComments />Comment</button>
                <button className="flex gap-x-2 items-center"><FaRegComments />{props?.updatedAt}</button>
            </div>
        </div>
    );
}

export default Post;