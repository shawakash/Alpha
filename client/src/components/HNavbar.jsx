import { Avatar, Badge } from 'antd';
import React, { useRef, useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsFillFilePostFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/slices/appConfigSlice';
import defaultAvatar from '../utils/defaultAvatar.png'
import {motion} from 'framer-motion'

function HNavbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.appConfigReducer.user);
    return (

        <motion.nav
            className="flex flex-row justify-between items-center bg-transparent z-50 backdrop-blur-lg bg-slate-900 w-full py-3 px-10 pr-16 gap-x-52 border-b-[0.25px] border-slate-500 sticky top-0 bg-opacity-90"
            animate={{y: 0}}
            initial={{y: -100}}
        >
            <div
                className="home text-xl flex gap-x-2 items-center font-cab font-semibold text-white tracking-wider cursor-pointer transition-all bg-transparent"
                onClick={() => navigate('/')}
            >
                <AiFillHome />
                Home
            </div>

            <div className="titleBar">
                <ul
                    className="flex w-fit px-1 py-[4px] justify-between text-sm items-center gap-x-6 text-slate-400 font-rob font-medium  rounded-lg "
                >
                    <li
                        className="hover:text-white focus:text-slate-300 hover:bg-slate-800 focus:bg-slate-800 px-2 py-1 transition-all rounded-lg cursor-pointer " onClick={() => navigate('/user')}
                    >
                        Explore
                    </li>
                    <li
                        className="hover:text-white focus:text-slate-300 focus:bg-slate-800 hover:bg-slate-800 px-2 py-1 transition-all rounded-lg cursor-pointer "
                        onClick={() => navigate('/profile/:userId')}
                    >
                        Community
                    </li>
                    <li
                        className="hover:text-white focus:text-slate-300 focus:bg-slate-800 hover:bg-slate-800 px-2 py-1 transition-all rounded-lg cursor-pointer "
                        onClick={() => navigate('/')}
                    >
                        Your Feeds
                    </li>
                </ul>
            </div>


            <div className="ProfileBar">
                <ul
                    className="flex w-fit justify-between text-lg items-center gap-x-10 text-slate-200 font-rok font-medium"
                >
                    <li
                        className=" cursor-pointer hover:text-teal-500 transition-all"
                        onClick={() => {
                            navigate('/logout')
                        }}
                    >
                        <FiLogOut />
                    </li>
                    <li
                        className=" cursor-pointer hover:text-teal-500 transition-all"
                        onClick={() => navigate('/')}
                    >
                        <BsFillFilePostFill />
                    </li>
                    <li
                        className=" cursor-pointer hover:text-teal-500 transition-all"
                        onClick={() => navigate(`/profile/${user._id}/updateProfile`)}
                    >
                        <MdOutlineTipsAndUpdates />
                    </li>
                    <li
                        className=" cursor-pointer hover:text-teal-500 transition-all"
                        onClick={() => navigate(`/profile/${user._id}`)}
                    >
                        <Badge dot>
                            <Avatar
                                className=' cursor-pointer hover:text-teal-500 transition-all'
                                src={user.avatar || defaultAvatar} 
                                alt='Profile Picture'
                                shape="circle"
                                icon={<UserOutlined />}
                                onClick={() => navigate('/profile/:userId')}

                            />

                        </Badge></li>
                </ul>
            </div>
        </motion.nav>

    );
}

export default HNavbar;