import { Checkbox } from 'antd';
import React, { useState } from 'react'
import { FaEnvelopeOpen, FaLock, FaMobile, FaUserAstronaut } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setNumber] = useState(0);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();     
    async function handleSubmit(e) {
        e.preventDefault();
        const result = await axiosClient.post('/auth/signup', {
            name,
            email,
            username,
            password,
            mobileNumber
        });
        console.log(result);
        if(result.status == 'success') {
            navigate('/');
        }
    }
    return (
        <section className="w-full flex items-center  justify-center gap-x-0">
            <div className="Welcome_Note w-fit my-[172px] h-[508px] hover:border-[#e1e1e180] border-[#e1e1e180] backdrop-blur-[5px] border-2 rounded-3xl transition-all bg-transparent flex flex-col px-10 pt-5 items-start gap-y-8 rounded-r-none ">
                <header className='w-fit px-1 mt-4 py-2 text-3xl font-bold font-popins text-white  tracking-wide flex gap-x-8 underline underline-offset-[15px] decoration-sky-500'>Welcome To The Family <GiPartyPopper /></header>
                <p className="w-96 text-white tracking-widest font-mon text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quis impedit error corporis praesentium natus consequatur libero commodi vero similique. Eum deleniti tempora quam aliquam repudiandae amet vero obcaecati ex. Iusto, id quibusdam voluptatem delectus accusamus labore officia minus laborum itaque quos voluptates quaerat eaque sit optio? Error, quae facilis?
                </p>
            </div>
            <div className="SignUp w-fit my-[172px] hover:border-[#e1e1e180] border-[#e1e1e180] backdrop-blur-[5px] border-2 rounded-3xl transition-all bg-transparent flex flex-col px-6 pt-5 items-center gap-y-4 rounded-l-none">
                <header className='w-fit px-1 mt-4 py-2 text-3xl font-bold font-popins text-white  tracking-wide flex gap-x-8'>SignUp</header>
                <form
                    className="rounded-3xl  flex flex-row p-8 pt-12 gap-x-16 font-mon w-fit h-[400px]  "
                    onSubmit={handleSubmit}>
                    <div className="left flex flex-col gap-y-16 font-mon w-80">
                        <div className="name flex flex-col relative ">
                            <FaUserAstronaut color='white' className='absolute right-1 top-2' fontSize={'1.2rem'} />
                            <input placeholder='Name' id='name' className='peer py-1 px-1 pb-2  focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent'
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <label htmlFor="name" className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg'>Name</label>
                        </div>

                        <div className="EMAIL flex flex-col relative">
                            <FaEnvelopeOpen color='white' className='absolute right-1 top-2' fontSize={'1.2rem'} />
                            <input placeholder='email' id='email' type={'email'} className='peer py-1 px-1 pb-2 focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent'
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <label htmlFor="email" className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg'>EMail</label>
                        </div>

                        <div className="Mobile flex flex-col relative">
                            <FaMobile color='white' className='absolute right-1 top-2' fontSize={'1.2rem'} />
                            <input placeholder='mobileNumber' id='mobileNumber' type={'number'} className='peer py-1 px-1 pb-2 focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent'
                                onChange={(e) => { setNumber(e.target.value) }}
                            />
                            <label htmlFor="mobileNumber" className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                                peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg'>Mobile</label>
                        </div>

                    </div>
                    <div className="right flex flex-col gap-y-16 font-mon">
                        <div className="user flex flex-col relative ">
                            <FaUserAstronaut color='white' className='absolute right-1 top-2' fontSize={'1.2rem'} />
                            <input placeholder='Username'
                                id='username'
                                className='peer py-1 px-1 pb-2  focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent'
                                onChange={(e) => { setUsername(e.target.value) }}
                            />
                            <label htmlFor="username" className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg'>Username</label>
                        </div>

                        <div className="pass flex flex-col relative">
                            <FaLock color='white' className='absolute right-1 top-2' fontSize={'1.2rem'} />
                            <input placeholder='password'
                                id='password'
                                type='password'
                                className='peer py-1 px-1 pb-2 focus:outline-none focus:border-b-white text-[14px] font-medium transition-all  border-b-2 text-slate-200 font-mon bg-transparent  placeholder-transparent'
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <label htmlFor="password" className='absolute -top-5 font-mon text-white text-base left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
                    peer-placeholder-shown:top-1 transition-all peer-focus:-top-7 peer-focus:text-white peer-focus:font-medium peer-focus:text-lg'>Password</label>
                        </div>
                        <div className="utils flex flex-col gap-y-10  items-center">
                            <div className="buttons flex items-center gap-x-8">
                                <button
                                    className='bg-white text-gray-600 w-40 px-2 py-1 rounded-lg transition-all hover:drop-shadow-md focus:outline-none hover:bg-slate-100 hover:outline-teal-500 hover:text-teal-500 hover:outline hover:outline-1 tracking-wide font-semibold '
                                    type='submit'>SignUp</button>
                                <Checkbox className='font-mon text-slate-300 '>Remember Me</Checkbox>
                            </div>
                            <div className="route flex justify-between text-sm font-light tracking-wide text-slate-300 w-full ">
                                <Link to={'/login'}>Family ?</Link>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Signup;