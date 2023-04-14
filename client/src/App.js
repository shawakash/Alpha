import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import Login from './pages/login/Login';
import { Route, Routes, useSearchParams } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import { getAllPost } from './redux/slices/postSlice';
import RestrictedRoute from './components/RestrictedRoute';
import toast, { Toaster } from 'react-hot-toast';
import Logout from './components/Logout';

export const TOAST_SUCCESS = 'toast_success';
export const TOAST_ERROR = 'toast_error';
export const TOAST_JSX = 'toast_jsx';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.appConfigReducer.isLoading);
  const toastData = useSelector((state) => state.appConfigReducer.toastData);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
  }, [isLoading]);

  useEffect(() => {

    switch (toastData.type) {

      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;

      case TOAST_ERROR:
        toast.error(toastData.message);
        break;

        
    }
  }, [toastData])

  return (
    <div className="App ">
      <LoadingBar color='#00C5C8' height={5} ref={loadingRef} />
      <div><Toaster /></div>
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
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
