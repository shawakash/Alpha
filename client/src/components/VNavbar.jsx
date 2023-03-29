import React from 'react';
import { Avatar, Badge, } from 'antd';
import { BsFillFilePostFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { AiFillHome, AiOutlineDelete, AiOutlineLike } from 'react-icons/ai';
import { RiCommunityLine, RiUserFollowFill } from 'react-icons/ri';
import { TbAlpha } from 'react-icons/tb';
import ListCard from './ListCard';

function Navbar() {
    return (
        
            <nav className="flex flex-col gap-y-5 p-5 bg-slate-900 border-r-[1px] h-screen border-slate-500 w-96 sticky top-0">
                <div className="brand flex gap-x-4 items-center text-3xl tracking-wider text-teal-400 font-rob font-bold transition-all w-fit"><TbAlpha /><span className=''>Alpha</span></div>
                <div className="search">
                    <input type="text" className="bg-slate-700 px-4 py-1 rounded-lg w-full text-slate-300 text-base outline-none" placeholder='🔍 Explore Alpha' />
                </div>
                <ul className="flex flex-col justify-start gap-y-3">
                    <li className="text-lg flex gap-x-4 text-slate-400 items-center py-2 px-2 focus:text-[#00C5C8] hover:text-[#00C5C8] transition-all focus:bg-slate-700 hover:bg-slate-700 rounded-lg"><AiFillHome />Home</li>
                    <li className="text-lg flex gap-x-4 text-slate-400 items-center py-2 px-2 focus:text-[#00C5C8] hover:text-[#00C5C8] transition-all focus:bg-slate-700 hover:bg-slate-700 rounded-lg"><RiCommunityLine /> Community</li>
                    <li className="text-lg flex gap-x-4 text-slate-400 items-center py-2 px-2 focus:text-[#00C5C8] hover:text-[#00C5C8] transition-all focus:bg-slate-700 hover:bg-slate-700 rounded-lg"><BsFillFilePostFill />My Posts</li>
                    <li className="text-lg flex gap-x-4 text-slate-400 items-center py-2 px-2 focus:text-[#00C5C8] hover:text-[#00C5C8] transition-all focus:bg-slate-700 hover:bg-slate-700 rounded-lg">
                        <AiOutlineLike /> Liked Post</li>
                    <li className=""><hr className='border-slate-700' /></li>
                </ul>
                <ul className="community flex flex-col gap-y-6 ">
                    <div className="text-slate-300 tracking-wider px-2 font-rob font-medium [word-spacing:3px]">My Community</div>
                    <ListCard />   <ListCard /> <ListCard /> {/* Multiple users here and provide props */}
                    <li className=""><hr className='border-slate-700' /></li>
                </ul>
                <ul className="settings flex flex-col px-2 w-fit text-lg gap-y-2  font-rob ">
                    <div className="text-slate-300 tracking-wider font-rob font-medium [word-spacing:3px]">Utilities</div>
                    <li className="flex text-slate-400 items-center gap-x-4 hover:bg-slate-800 py-2 rounded-xl transition-all peer"><Avatar shape='circle'  icon={<RiUserFollowFill /> } className='flex text-slate-400 items-center justify-center'/> Profile</li>
                    <li className="flex items-center text-slate-400 px-2 gap-x-4 hover:bg-slate-800 py-2 rounded-xl transition-all peer"><FiLogOut /> Logout</li>
                    <li className="flex text-slate-400 items-center px-2 gap-x-4 hover:bg-slate-800 py-2 rounded-xl transition-all peer">
                    <AiOutlineDelete /> Delete Profile</li>
                </ul>
            </nav>
           
        
    );
}

export default Navbar;