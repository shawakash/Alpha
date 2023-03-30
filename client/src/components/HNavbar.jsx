import { Avatar, Badge } from 'antd';
import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsFillFilePostFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { UserOutlined } from "@ant-design/icons";


function HNavbar() {
  return (
   
<nav className="flex flex-row justify-between items-center bg-transparent z-50 backdrop-blur-lg bg-slate-900 w-full py-3 px-10 pr-16 gap-x-52 border-b-[0.25px] border-slate-500 sticky top-0 bg-opacity-90">
<div className="home text-xl flex gap-x-2 items-center font-cab font-semibold text-white tracking-wider"><AiFillHome />Home</div>
<div className="titleBar">
    <ul className="flex w-fit px-1 py-[4px] justify-between text-sm items-center gap-x-6 text-slate-400 font-rob font-medium  rounded-lg ">
        <li className="hover:text-slate-300 focus:text-slate-300 hover:bg-slate-800 focus:bg-slate-800 px-2 py-1 transition-all rounded-lg">Explore</li>
        <li className="hover:text-slate-300 focus:text-slate-300 focus:bg-slate-800 hover:bg-slate-800 px-2 py-1 transition-all rounded-lg">Community</li>
        <li className="hover:text-slate-300 focus:text-slate-300 focus:bg-slate-800 hover:bg-slate-800 px-2 py-1 transition-all rounded-lg">Your Feeds</li>
    </ul>
</div>
<div className="ProfileBar">
    <ul className="flex w-fit justify-between text-lg items-center gap-x-10 text-slate-200 font-rok font-medium">
        <li className=""><FiLogOut /></li>
        <li className=""><BsFillFilePostFill /></li>
        <li className=""><Badge dot>
            <Avatar className='' src={'/'} alt='Profile Picture' shape="circle" icon={<UserOutlined />} />

        </Badge></li>
    </ul>
</div>
</nav>

  );
}

export default HNavbar;