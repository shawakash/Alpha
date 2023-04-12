import { Button, Checkbox, Form, Input } from 'antd';
import FormItemLabel from 'antd/es/form/FormItemLabel';
import React, { useState } from 'react';
import './Login.css'
import { FaLock, FaUserAstronaut } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import {axiosClient} from '../../utils/axiosClient';
import { KEY_ACCESS_TOKEN, setItem } from '../../utils/localStorageManager';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/newsSlice';
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleSubmit (e) {
        e.preventDefault();
        try {
            const result = await axiosClient.post('/auth/login', {
                username,
                password
            });
            console.log(result.result);
            console.log(result.result.user)
            const user = result.result.user;
            // dispatch(setUser(user));
            setItem(KEY_ACCESS_TOKEN, result.result.accessToken);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
        
    }
    return (
        <section className="w-full flex items-center justify-center ">
            <div className="Login w-fit m-56  hover:border-[#e1e1e180] border-[#e1e1e180] backdrop-blur-[5px] focus-within:backdrop-blur-[12px] border-2 rounded-3xl transition-all bg-transparent flex flex-col pt-5 items-center gap-y-4">
                <header className='w-fit px-1 mt-4 py-2 text-3xl font-bold font-popins text-white  tracking-wide'>Welcome Back</header>
                <form className="rounded-3xl  flex flex-col p-8 pt-12 gap-y-16 font-mon w-[400px] h-[400px]  " onSubmit={handleSubmit}>
                    <div className="user flex flex-col relative ">
                        <FaUserAstronaut color='white' className='absolute right-1 top-2' fontSize={'1.2rem'}/>
                        <input placeholder='Username' id='username' className='peer py-1 px-1 pb-2  focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent' onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
                        <label htmlFor="username" className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg'>Username</label>
                    </div>
                    <div className="pass flex flex-col relative">
                        <FaLock color='white' className='absolute right-1 top-2' fontSize={'1.2rem'}/>
                        <input placeholder='password' id='password' type='password' className='peer py-1 px-1 pb-2 focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent' onChange={(e) => {setPassword(e.target.value)}}/>
                        <label htmlFor="password" className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg'>Password</label>
                    </div>
                    <div className="utils flex flex-col gap-y-10  items-center">
                        <div className="buttons flex items-center gap-x-8">
                            <button type='submit' className='bg-white text-gray-600 w-40 px-2 py-1 rounded-lg transition-all hover:drop-shadow-md focus:outline-none hover:bg-slate-100 hover:outline-teal-500 hover:text-teal-500 hover:outline hover:outline-1 tracking-wide font-semibold '>Login</button>
                            <Checkbox className='font-mon text-slate-300 '>Remember Me</Checkbox>
                        </div>
                        <div className="route flex justify-between text-sm font-light tracking-wide text-slate-300 w-full ">
                            <a>Forgoten Password ?</a>
                            <Link to={'/signup'}>New Here? Resister</Link>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default Login;