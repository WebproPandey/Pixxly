// File: components/LoginForm.jsx
import React, { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import gsap from 'gsap';

const LoginForm = ({ onSwitch }) => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={formRef}>
      <button className="mb-6 p-2 hover:bg-white/20 rounded-full transition-colors duration-200">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight whitespace-pre-line">
        Welcome
Back
      </h1>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-500 transition-all duration-200"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-500 transition-all duration-200"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4"
        >
          Log in
        </button>
      </form>

      <div className="mt-6 text-center">
        <button className="text-purple-500 hover:text-purple-700 text-sm transition-colors duration-200">
          Forgot Password ?
        </button>

        <div className="mt-6">
          <p className="text-gray-600 text-sm">
            Don't have an account ?{' '}
            <button 
              onClick={onSwitch}
              className="text-purple-500 hover:text-purple-700 font-medium transition-colors duration-200"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
