// File: components/RegisterForm.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const RegisterForm = ({ onSwitch }) => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={formRef} className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
        Create Account
      </h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full name"
          className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 rounded-full hover:scale-105 transition-all"
        >
          Sign up
        </button>
      </form>

      <div className="mt-6 text-center">
        <div className="text-gray-500 text-sm mb-4">or</div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="w-12 h-12 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
            {/* Facebook Icon */}
            F
          </button>
          <button className="w-12 h-12 bg-white border text-gray-700 rounded-full hover:scale-110 transition-transform">
            {/* Google Icon */}
            G
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <button onClick={onSwitch} className="text-purple-600 font-medium">Log in</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
