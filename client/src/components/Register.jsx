import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../app/features/auth/authReducer';
import getGoogleURL from '../utils/getGoogleURL';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) navigate('/home');
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }));
  };

  return (
    <div ref={formRef} className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
        Create Account
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 rounded-full hover:scale-105 transition-all"
        >
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <div className="text-gray-500 text-sm mb-4">or</div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="w-12 h-12 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
            F
          </button>
          <a
            href={getGoogleURL()}
            className="w-12 h-12 bg-white border text-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            G
          </a>
        </div>
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-purple-600 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
