import React from 'react'
import ListCard from './ListCard'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Following() {
    const loaction = useLocation();
    const userId = (loaction.pathname.split('/'))[2];
    const user = useSelector(state => state.userReducer.user);
    return (
        <div className='grid grid-cols-4 items-center gap-10 '>
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            <ListCard 
                id={user._id}
                key={user._id}
                linkId={`/profile/${user._id}`}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
            />
            {user.followings.map(following => {
                return (
                    <ListCard
                        id={following._id}
                        key={following._id}
                        linkId={`/profile/${following._id}`}
                        avatar={following.avatar}
                        name={following.name}
                        email={following.email}
                    />
                );
            })}
        </div>
    )
}

export default Following