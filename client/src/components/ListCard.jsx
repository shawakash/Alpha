import { Avatar, List } from 'antd';
import React from 'react'
import { RiUserFollowFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function ListCard() {
  const navigate = useNavigate();
  return (
    <li className="flex items-center px-2 gap-x-5  border-[1px] border-transparent hover:border-slate-500 py-2 rounded-xl transition-all peer cursor-pointer" onClick={() => navigate('/profile/:userId')}>
      <div className="img">
        <Avatar
          shape='circle'
          src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
          size={50}
          icon={<RiUserFollowFill />}
          className='flex items-center justify-center' />
      </div>
      <div className="descr flex flex-col">
        <div
          className="name font-rob text-slate-200 transition-colors tracking-widest font-semibold hover:text-[#00C5C8]"
        >
          Akash Shaw
        </div>
        <div
          className="context font-rob text-slate-400 italic"
        >
          a.shaw@iitg.ac.in
        </div>
      </div>
    </li>
  );
}

export default ListCard;