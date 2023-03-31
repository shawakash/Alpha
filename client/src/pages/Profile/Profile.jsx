import React, { useState } from 'react';
import { Avatar } from 'antd';
import { RiUserFollowFill } from 'react-icons/ri';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Profile() {
    const [followState, setFollowState] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center py-10 backdrop-blur-xl rounded-lg border-slate-500 border-[0.25px] gap-y-8 w-full'>
            <div className="img w-fit">
                <Avatar shape='circle' size={250} src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' className='flex items-center justify-center' />
            </div>
            <div className="name flex flex-col gap-y-1 items-center  font-rob">
                <div className="realName text-5xl text-[#00C5C8] font-semibold">
                    Akash Shaw
                </div>
                <div className="username text-slate-400 text-lg italic">
                    shawakash2003
                </div>
            </div>
            <div className="email text-slate-300 font-medium font-rob text-xl ">
                a.shaw@iitg.ac.in
            </div>
            <div className="About flex w-[450px] text-center font-normal leading-6 font-rob text-slate-300 tracking-wider">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, architecto necessitatibus in ipsam repellendus dignissimos. Corrupti ratione illo itaque voluptates.
            </div>
            <div
                className="Utilities flex gap-x-10 font-rob text-slate-300 text-lg"
            >
                <button
                    className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all"
                    onClick={() => setFollowState(!followState)}
                >{followState ? 'Unfollow' : 'Follow'}</button>
                <button
                    className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all"
                    onClick={() => navigate('/profile/:userId')}
                >Posts</button>
            </div>
            <div
                className="Utilities flex gap-x-10 font-rob text-slate-300 text-lg"
            >
                <Link to='createPost'>
                    <button className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all ">Create Post</button>
                </Link>



                <Link to='updateProfile'>
                    <button className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all">Update Profile</button>
                </Link>
                <Link to='/logout'>
                    <button className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all">Logout</button>
                </Link>
                <Link to='deleteProfile'>
                    <button className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all">Delete Profile</button>
                </Link>
            </div>
            <div className="hr w-full">
                <hr className='border-1 w-full border-slate-500 ' />
            </div>
            <div className="Links">
                <div className="buttons flex gap-x-40 text-xl text-slate-300 font-rob tracking-wider">
                    <Link to=''>
                        <button className="hover:text-teal-500 hover:underline hover:underline-offset-[16px] transition-all px-4 py-2">Feeds</button>
                    </Link>
                    <Link to='followers'>
                        <button className="hover:text-teal-500 hover:underline hover:underline-offset-[16px] transition-all px-4 py-2">Followers</button>
                    </Link>
                    <Link to='following'>
                        <button className="hover:text-teal-500 hover:underline hover:underline-offset-[16px] transition-all px-4 py-2">Following</button>
                    </Link>
                    <Link to='likedPost'>
                        <button className="hover:text-teal-500 hover:underline hover:underline-offset-[16px] transition-all px-4 py-2">Liked Post</button>
                    </Link>
                </div>
            </div>
            <div className="hr w-full">
                <hr className='border-1 w-full border-slate-500 ' />
            </div>
            <div className="Outlet flex flex-col gap-y-10 py-5 w-full px-10">
                <Outlet />
            </div>
        </div>
    );
}

export default Profile;