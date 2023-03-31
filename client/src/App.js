import React from 'react';
import { Button } from 'antd';
import Login from './pages/login/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Feed from './components/Feed/Feed';
import Profile from './pages/Profile/Profile';
import Post from './components/Post';
import Followers from './components/Followers';
import Following from './components/Following';
import CreatePost from './components/CreatePost';
import LikedPost from './components/LikedPost';
import UpdateProfile from './pages/Update/UpdateProfile';
import DeleteAccount from './components/DeleteAccount';


function App() {
  return (
    <div className="App ">
      {/* <Login /> */}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Home />}>
            <Route path='/' element={<Feed />} />
            <Route path='/profile/:userId' element={<Profile />}>
              <Route path='' element={<Feed />} />
              <Route path='followers' element={<Followers />} />
              <Route path='following' element={<Following />} />
              <Route path='likedPost' element={<LikedPost />} />
              <Route path='createPost' element={<CreatePost />} />
              <Route path='updateProfile' element={<UpdateProfile />} />
              <Route path='deleteProfile' element={<DeleteAccount />} />
            </Route>
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
