import React from 'react';
import { Heart, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-black px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-white text-2xl font-bold italic">Pixxly</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Link to='/notification'>
            <Heart className="w-7 h-7 text-white" />
          </Link>
        </div>
        <div className="relative">
          <Link to='/inbox'>
            <Send className="w-7 h-7 text-white" />
          </Link>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;