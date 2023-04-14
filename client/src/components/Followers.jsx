import React from 'react';
import ListCard from './ListCard';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Followers() {
    const loaction = useLocation();
    const userId = (loaction.pathname.split('/'))[2];
    const user = useSelector(state => state.userReducer.user);
    console.log('User', user)
    console.log('Followers', userId);
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
            {user?.followers?.map(follower => {
                return (
                    <ListCard
                        id={follower._id}
                        key={follower._id}
                        linkId={`/profile/${follower._id}`}
                        avatar={follower.avatar}
                        name={follower.name}
                        email={follower.email}
                    />
                );
            })}

        </div>
    );
}

export default Followers