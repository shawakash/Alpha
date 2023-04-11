import React, { useRef, useState } from 'react';
import { Avatar, Card } from 'antd';
import { RiUserFollowFill } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhotograph } from 'react-icons/hi';
import { BsEmojiWink, BsPostcard } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../utils/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../redux/slices/postSlice';

function CreatePost() {
    const user = useSelector(state => state.appConfigReducer.user);
    const navigate = useNavigate();
    const [postImg, setPostImg] = useState('');
    const [caption, setCaption] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        // dispatch(createPost({
        //     owner: user._id,
        //     caption: caption,
        //     image: postImg
        // }));
    }

    function handleDrafting() {

    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        console.log(file)
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (fileReader.readyState === fileReader.DONE) {
                console.log(fileReader.result)
                setPostImg(fileReader.result);
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-slate-900 text-slate-200 bg-transparent backdrop-blur-lg flex flex-col px-10 py-5 w-full rounded-lg border-slate-500 border-[0.25px] gap-y-8"
        >   <div className="img rounded-lg">
                <img src={postImg} className='rounded-2xl transition-all' />
            </div>
            <div className="up flex w-full gap-x-5">
                <Avatar
                    shape='circle'
                    src={user?.avatar}
                    icon={<RiUserFollowFill />}
                    size={50}
                    className='flex text-slate-400 items-center justify-center cursor-pointer' onClick={() => navigate('/profile/:userId')}

                />
                <input
                    type="text"
                    className=" bg-transparent border-slate-300 border px-8 py-1 rounded-full w-full  text-slate-300 text-base outline-none"
                    placeholder="What's on your Mind"

                    onChange={(e) => setCaption(e.target.value)}
                />
            </div>


            <div
                className="options flex gap-x-5 items-center text-slate-300"
            >


                <label
                    htmlFor="updateImg"
                    className='relative transition-all'
                >
                    <HiOutlinePhotograph
                        size={25}
                        className='hover:text-[#00C5C8] transition-all cursor-pointer'
                        onClick={() => { }}

                    />

                </label>
                <input
                    id='updateImg'
                    type="file"
                    className="hidden transition-all"
                    accept='image/*'
                    onChange={handleImageChange}
                />
                <label
                    htmlFor="updateImg"
                    className='relative transition-all'
                >
                    <FaCameraRetro
                        size={25}
                        onClick={() => { }}
                        className='hover:text-[#00C5C8] transition-all cursor-pointer'

                    />

                </label>
                <input
                    id='updateImg'
                    type="file"
                    className="hidden transition-all"
                    accept='image/*'
                    onChange={handleImageChange}
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
                {/* <EmojiPicker className='hidden'/> */}
                <div className="grow">

                </div>

                <button
                    className='text-xl px-4 py-1 rounded-lg  flex items-center gap-x-4 hover:bg-slate-600 transition-all hover:text-[#00C5C8] hover:font-semibold cursor-pointer'
                    onClick={handleDrafting}
                >
                    <BsPencilSquare />
                    Draft
                </button>

                <button
                    type='submit'
                    className='text-xl px-4 py-1 rounded-lg border-[0.25px] flex items-center gap-x-4 hover:bg-slate-600 transition-all hover:text-[#00C5C8] border-slate-400 hover:border-none hover:font-semibold cursor-pointer'
                    onClick={handleSubmit}
                >
                    <BsPostcard />
                    Post
                </button>

            </div>

        </form>
    );
}

export default CreatePost;