import React from 'react'
import {Route, Routes,Navigate }  from 'react-router-dom'
import AuthContainer from '../pages/AuthContainer';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Notification from '../pages/Notification';
import BottomNavigation from '../components/BottomNavigation';
import InboxPage from '../pages/InboxPage';

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} /> 
        <Route path="/auth/*" element={<AuthContainer/>}/> 
        <Route path='/home' element={<Home/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/notification" element={<Notification/>} />
         <Route path="/inbox" element={<InboxPage/>} />
        <Route path="*" element={<div className="text-center mt-10 text-xl">404 Not Found</div>} />
      </Routes>
      <BottomNavigation/>
    </>
  )
}

export default AppRoute