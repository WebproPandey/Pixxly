import React from 'react';
import { Home, Search, Plus, Play, User } from 'lucide-react';
import { Link, Links } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        <Link to='/home'>
         <Home className="w-7 h-7 text-white" />
        </Link>
        <Search className="w-7 h-7 text-white" />
        <Plus className="w-7 h-7 text-white" />
        <Play className="w-7 h-7 text-white" />
        <div className="relative">
          <Link to='/profile'>
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          </Link>

          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></div>
        </div>
      </div>
      
   
    </div>
  );
};

export default BottomNavigation;