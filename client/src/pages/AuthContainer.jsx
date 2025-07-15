// File: components/AuthContainer.jsx
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import LoginForm from '../components/Login';
import RegisterForm from '../components/Register';
import { Route, Routes, useNavigate } from 'react-router-dom';

const AuthContainer = () => {
   const cardRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div ref={cardRef} className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 via-purple-300/30 to-blue-300/30 rounded-3xl blur-xl"></div>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-white/90 to-purple-100/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/20">
          <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Routes>
        </div>

        {/* Glow Orbs */}
        <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
      </div>
    </div>
  );
};

export default AuthContainer;
