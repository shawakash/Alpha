import React, { useRef } from 'react';
import { Avatar, Card } from 'antd';
import { RiUserFollowFill } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhotograph } from 'react-icons/hi';
import { BsEmojiWink, BsPostcard } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../utils/axiosClient';

function CreatePost() {
    const navigate = useNavigate();
    const captionRef = useRef(null);
    return (
        <div
            className="bg-slate-900 text-slate-200 bg-transparent backdrop-blur-lg flex flex-col px-10 py-5 w-full rounded-lg border-slate-500 border-[0.25px] gap-y-8"
        >
            <div className="up flex w-full gap-x-5">
                <Avatar
                    shape='circle'
                    src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
                    icon={<RiUserFollowFill />}
                    size={50}
                    className='flex text-slate-400 items-center justify-center cursor-pointer' onClick={() => navigate('/profile/:userId')}

                />
                <input
                    type="text"
                    className=" bg-transparent border-slate-300 border px-8 py-1 rounded-full w-full  text-slate-300 text-base outline-none"
                    placeholder="What's on your Mind"
                    onKeyUp={() => {
                        // const postCaption = captionRef.current.value;
                        // const CreatePost = await axiosClient.post('/post/createPost', {});
                        navigate('/');
                    }}
                    ref={captionRef}
                />
            </div>


            <div
                className="options flex gap-x-5 items-center text-slate-300"
            >

                <HiOutlinePhotograph
                    size={25}
                    className='hover:text-[#00C5C8] transition-all cursor-pointer'
                    onClick={() => { }}

                />

                <FaCameraRetro
                    size={25}
                    onClick={() => { }}
                    className='hover:text-[#00C5C8] transition-all cursor-pointer'

                />

                <HiOutlineLocationMarker
                    size={25}
                    onClick={() => { }}
                    className='hover:text-[#00C5C8] transition-all cursor-pointer'

                />

                <BsEmojiWink
                    size={25}
                    onClick={() => { }}
                    className='hover:text-[#00C5C8] transition-all cursor-pointer'

                />

                <div className="grow">

                </div>

                <button
                    className='text-xl px-4 py-1 rounded-lg  flex items-center gap-x-4 hover:bg-slate-600 transition-all hover:text-[#00C5C8] hover:font-semibold cursor-pointer'
                    onClick={() => { }}
                >
                    <BsPencilSquare />
                    Draft
                </button>

                <button
                    className='text-xl px-4 py-1 rounded-lg border-[0.25px] flex items-center gap-x-4 hover:bg-slate-600 transition-all hover:text-[#00C5C8] border-slate-400 hover:border-none hover:font-semibold cursor-pointer'
                    onClick={() => { }}
                >
                    <BsPostcard />
                    Post
                </button>

            </div>

        </div>
    );
}

export default CreatePost;