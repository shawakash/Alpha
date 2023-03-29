import React from 'react';
import { Button } from 'antd';
import Login from './pages/login/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App ">
      {/* <Login /> */}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
