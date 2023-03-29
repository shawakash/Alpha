import { Avatar, List } from 'antd';
import React from 'react'
import { RiUserFollowFill } from 'react-icons/ri';

function ListCard() {
  return (
    <li className="flex items-center px-2 gap-x-5 hover:bg-slate-800 py-2 rounded-xl transition-all peer">
        <div className="img">
            <Avatar shape='circle'  icon={<RiUserFollowFill /> } className='flex items-center justify-center'/>
        </div>
        <div className="descr flex flex-col">
            <div className="name font-rob transition-colors tracking-widest font-semibold hover:text-[#00C5C8]">Akash Shaw</div>
            <div className="context font-rob text-slate-400 italic">a.shaw@iitg.ac.in</div>
        </div>
    </li>
  );
}

export default ListCard;