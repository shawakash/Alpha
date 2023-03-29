import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment, FaRegComments } from 'react-icons/fa';
import ListCard from './ListCard';

function Post() {
    return (
        <div className="bg-slate-900 text-slate-200 flex flex-col px-10 py-5 w-full rounded-lg border-slate-500 border-[0.25px] gap-y-3">
            <ListCard />
            <div className="caption w-fit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusantium neque asperiores ad, perspiciatis nemo rerum quia commodi nam qui!
            </div>
            <div className="img">
                <img src='https://c4.wallpaperflare.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-preview.jpg' alt="Post Image" className="w-full rounded-3xl" />
            </div>
            <div className="utilities flex items-center justify-between text-lg mt-2 px-2">
                <button className="flex gap-x-2 items-center"><AiOutlineLike size={25}/> Like</button>
                <button className="flex gap-x-2 items-center"><FaRegComments />Comment</button>
                <button className="flex gap-x-2 items-center"><FaRegComments /> Not Defined</button>
            </div>
        </div>
    );
}

export default Post;