import React from 'react';
import { Avatar, Card } from 'antd';
import { RiUserFollowFill } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhotograph } from 'react-icons/hi';
import { BsEmojiWink, BsPostcard } from 'react-icons/bs';

function CreatePost() {
    return (
        <div className="bg-slate-900 text-slate-200 flex flex-col px-10 py-5 w-full rounded-lg border-slate-500 border-[0.25px] gap-y-8">
            <div className="up flex w-full gap-x-5">
                <Avatar shape='circle' icon={<RiUserFollowFill />} size={50} className='flex text-slate-400 items-center justify-center' />
                <input type="text" className="bg-slate-700 px-8 py-1 rounded-full w-full  text-slate-300 text-base outline-none" placeholder="What's on your Mind" />
            </div>
            <div className="options flex gap-x-5 items-center text-slate-300">
            <HiOutlinePhotograph size={25} className='hover:text-[#00C5C8] transition-all'/>
            <FaCameraRetro size={25} className='hover:text-[#00C5C8] transition-all'/>
            <HiOutlineLocationMarker size={25} className='hover:text-[#00C5C8] transition-all'/>
            <BsEmojiWink size={25} className='hover:text-[#00C5C8] transition-all'/>
            <div className="grow"></div>
            <button className='text-xl px-4 py-1 rounded-lg  flex items-center gap-x-4 hover:bg-slate-600 transition-all hover:text-[#00C5C8] hover:font-semibold'><BsPencilSquare /> Draft</button>
            <button className='text-xl px-4 py-1 rounded-lg border-[0.25px] flex items-center gap-x-4 hover:bg-slate-600 transition-all hover:text-[#00C5C8] border-slate-400 hover:border-none hover:font-semibold'><BsPostcard /> Post</button>
            </div>
            
        </div>
    );
}

export default CreatePost;