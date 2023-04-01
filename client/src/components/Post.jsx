import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment, FaRegComments } from 'react-icons/fa';
import ListCard from './ListCard';

function Post(props) {
    let likes = props.likes;
    console.log(likes)
    
    return (
        <div className="bg-slate-900 bg-transparent backdrop-blur-lg text-slate-200 flex flex-col px-10 py-5 w-full rounded-lg border-slate-500 border-[0.25px] gap-y-3">
            <ListCard />
            <div className="caption w-fit text-xl">
                {props.caption}
            </div>
            <div className="img">
                <img
                    src={props.imgUrl}
                    alt="Post Image"
                    className="w-full rounded-3xl"
                />
            </div>
            <div className="utilities flex items-center justify-between text-lg mt-2 px-2">
                <button className="flex gap-x-2 items-center"><AiOutlineLike size={25} /> Like</button>
                <button className="flex gap-x-2 items-center"><FaRegComments />Comment</button>
                <button className="flex gap-x-2 items-center"><FaRegComments /> Not Defined</button>
            </div>
        </div>
    );
}

export default Post;