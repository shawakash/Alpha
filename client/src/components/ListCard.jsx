import { Avatar, List } from 'antd';
import React from 'react'
import { RiUserFollowFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import defatultAvatar from '../utils/defaultAvatar.png'

function ListCard({ avatar, name, email, linkId }) {
  const navigate = useNavigate();
  return (
    <Link to={linkId} >
      <li className="flex items-center px-2 gap-x-5  border-[1px] border-transparent hover:border-slate-500 py-2 rounded-xl transition-all peer cursor-pointer"
        
      >
        <div className="img">
          <Avatar
            shape='circle'
            src={avatar || defatultAvatar}
            size={50}
            icon={<RiUserFollowFill color='white' />}
            className='flex items-center justify-center' />
        </div>
        <div className="descr flex flex-col">
          <div
            className="name font-rob text-slate-200 transition-colors tracking-widest font-semibold hover:text-[#00C5C8]"
          >
            {name}
          </div>
          <div
            className="context font-rob text-slate-400 italic truncate w-40 text-ellipsis overflow-hidden"
          >
            {email}
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ListCard;