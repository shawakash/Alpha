import { Alert, Space } from 'antd';
import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa';

function DeleteAccount() {
    const [password, setPassword] = useState('');
    return (
        <div className="flex gap-x-10 w-full px-10 bg-yellow-900 py-10 rounded-3xl">
            <div className="message text-red-200 text-xl w-1/2">
                Enter your password to delete your account!
            </div>
            <div className="pass flex flex-col relative w-1/2">
                <FaLock
                    color='white'
                    className='absolute right-1 top-2'
                    fontSize={'1.2rem'}

                />
                <input
                    placeholder='password'
                    id='password'
                    type='password'
                    className='peer py-1 px-1 pb-2 focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent'
                    onChange={(e) => { setPassword(e.target.value) }}

                />
                <label
                    htmlFor="password"
                    className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                            peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg'
                >
                    Password
                </label>
            </div>
        </div>

    );
}

export default DeleteAccount;