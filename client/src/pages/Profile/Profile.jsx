import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from 'antd';
import { RiUserFollowFill } from 'react-icons/ri';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from '../../utils/defaultAvatar.png'
import { fetchUserData } from '../../redux/slices/userSlice';
import Feed from '../../components/Feed/Feed';

function Profile() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    // const outletRef = useRef();
    // const scrollElement = location.pathname.split('/')[3] || 0;
    const [followState, setFollowState] = useState(false);
    useEffect(() => {
        console.log('from userEffect', userId)
        dispatch(fetchUserData({
            userId
        }))
        // if(scrollElement){
        //     outletRef.current.scrollIntoView(); 
        // }
        
            window.scrollTo(0,0);
        
    }, [userId])
    let isFollowing = false;

    console.log(userId);
    const navigate = useNavigate();
    const userFetchStatus = useSelector(state => state.userReducer.status);
    const localUser = useSelector(state => state.appConfigReducer.user);
    const user = useSelector(state => state.userReducer.user);
    if (userFetchStatus == 'success') {
        console.log('from pro', user)
        const isLocalUser = userId == localUser._id ? true : false;
        if (!isLocalUser) {
            user.followers.map(follower => {
                if (follower._id == localUser._id) {
                    isFollowing = true;
                }
            });
        }
        return (
            <div className='flex flex-col items-center py-10 backdrop-blur-xl rounded-lg border-slate-500 border-[0.25px] gap-y-8 w-full'>
                <div className="img w-fit">
                    <Avatar
                        shape='circle'
                        size={250}
                        src={user?.avatar || defaultAvatar}
                        className='flex items-center justify-center'

                    />
                </div>
                <div className="name flex flex-col gap-y-1 items-center  font-rob">
                    <div className="realName text-5xl text-[#00C5C8] font-semibold">
                        {user?.name}
                    </div>
                    <div className="username text-slate-400 text-lg italic">
                        {user.username}
                    </div>
                </div>
                <div className="email text-slate-300 font-medium font-rob text-xl ">
                    {user.email}
                </div>
                <div className="About flex w-[450px] text-center justify-center font-normal leading-6 font-rob text-slate-300 tracking-wider">
                    {user.bio}
                </div>
                <div
                    className="Utilities flex gap-x-10 font-rob text-slate-300 text-lg"
                >
                    {isLocalUser ? '' :
                        <button
                            className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all"
                            onClick={() => setFollowState(!followState)}
                        >{followState ? 'Unfollow' : 'Follow'}
                        </button>
                    }
                    <Link to={`/profile/${userId}`}>
                        <button 
                            
                            className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all"
                        >Posts</button>

                    </Link>
                </div>
                <div
                    className="Utilities flex gap-x-10 font-rob text-slate-300 text-lg"
                >
                    {isLocalUser ?
                        <Link
                            to='createPost'>
                            <button
                                className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all "
                            >
                                Create Post
                            </button>
                        </Link>
                        : ''}



                    {isLocalUser ?
                        <Link to='updateProfile'>
                            <button
                                className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all"
                            >
                                Update Profile
                            </button>
                        </Link>
                        : ''}
                    {isLocalUser ?
                        <Link to='/logout'>
                            <button
                                className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all"
                            >
                                Logout
                            </button>
                        </Link>
                        : ''}
                    {isLocalUser ?
                        <Link to='deleteProfile'>
                            <button
                                className="border-[1px] border-slate-400 px-3 py-2 rounded-2xl hover:bg-teal-600 hover:text-white hover:border-transparent transition-all"
                            >
                                Delete Profile
                            </button>
                        </Link>
                        : ''}
                </div>
                <div className="hr w-full">
                    <hr className='border-1 w-full border-slate-500 ' />
                </div>
                <div className="Links">
                    <div className="buttons flex gap-x-40 text-xl text-slate-300 font-rob tracking-wider">
                        <Link to='' state={userId}>
                            <button
                                className="hover:text-teal-500 hover:underline hover:underline-offset-[16px] transition-all px-4 py-2"
                            >
                                Feeds
                            </button>
                        </Link>
                        <Link to='followers'>
                            <button
                                className="hover:text-teal-500 hover:underline hover:underline-offset-[16px] transition-all px-4 py-2"
                            >
                                Followers
                            </button>
                        </Link>
                        <Link to='following'>
                            <button
                                className="hover:text-teal-500 hover:underline hover:underline-offset-[16px] transition-all px-4 py-2"
                            >
                                Following
                            </button>
                        </Link>
                        {isLocalUser ?
                            <Link to='likedPost'>
                                <button
                                    className="hover:text-teal-500 hover:underline hover:underline-offset-[16px] transition-all px-4 py-2"
                                >
                                    Liked Post
                                </button>
                            </Link>
                            : ''}
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

}

export default Profile;