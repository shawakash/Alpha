import { Avatar } from 'antd';
import React, { useRef, useState } from 'react';
import { RiUserFollowFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function UpdateProfile() {
    const navigate = useNavigate();
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newBio, setNewBio] = useState('');
    return (
        <div className=' bg-transparent backdrop-blur-lg rounded-lg border-[1px] border-slate-500 px-5 py-16'>
            <form onSubmit={() => { }} className='flex items-center gap-x-20 px-6'>
                <div className="avatar">
                    <Avatar
                        shape='circle'
                        src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
                        size={200}
                        className='flex text-slate-400 items-center justify-center cursor-pointer'
                    />
                </div>
                <div className="name flex flex-col w-full gap-y-16">
                    <div className="name flex flex-col relative ">

                        <input
                            placeholder='Your Name'
                            id='name'
                            className='peer py-1 px-1 pb-2  focus:outline-none focus:border-b-white text-xl font-medium transition-all  border-b-2 text-[#00C5C8] font-rob bg-transparent  placeholder-transparent'
                            onChange={(e) => {
                                setNewName(e.target.value)
                            }}

                        />
                        <label
                            htmlFor="name"
                            className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-2xl'
                        >
                            Your Name
                        </label>
                    </div>
                    <div className="Mobile flex flex-col relative ">

                        <input
                            placeholder='Tell The world about yourself'
                            id='bio'
                            className='peer py-1 px-1 pb-2  focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent italic'
                            onChange={(e) => {
                                setNewBio(e.target.value)
                            }}

                        />
                        <label
                            htmlFor="bio"
                            className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg italic'
                        >
                            Tell The world about yourself
                        </label>
                    </div>
                    <div className="Mobile flex flex-col relative ">

                        <input
                            placeholder='Your Number'
                            id='number'
                            className='peer py-1 px-1 pb-2  focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent italic'
                            onChange={(e) => {
                                setNewNumber(e.target.value)
                            }}

                        />
                        <label
                            htmlFor="number"
                            className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg italic'
                        >
                            Your Number
                        </label>
                    </div>
                    <div className="">
                        <button
                            className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all"
                            onClick={() => { }}
                        >
                            Update Account
                        </button>
                    </div>
                </div>
            </form>

        </div>

    );
}

export default UpdateProfile;