import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../app/features/auth/authReducer';
import getGoogleURL from '../utils/getGoogleURL';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) navigate('/home');
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div ref={formRef}>
      <button className="mb-6 p-2 hover:bg-white/20 rounded-full transition-colors duration-200">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight whitespace-pre-line">
        Welcome<br />Back
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500 transition-all"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500 transition-all"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <a
          href={getGoogleURL()}
          className="block text-purple-600 hover:text-purple-800 text-sm font-medium transition duration-200"
        >
          Sign in with Google
        </a>

        <button className="mt-4 text-purple-500 hover:text-purple-700 text-sm transition-colors duration-200">
          Forgot Password?
        </button>

        <div className="mt-6">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <Link to="/auth/register" className="text-purple-500 hover:text-purple-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
