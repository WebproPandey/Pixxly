import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {Link}  from 'react-router-dom'

const NotificationHeader = () => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
    <div className="flex items-center space-x-4">
      <Link to='/home' className="p-1 hover:bg-gray-100 rounded-full transition-colors">
        <ArrowLeft className="w-6 h-6 text-gray-900" />
      </Link>
      <h1 className="text-lg font-semibold text-gray-900">Notifications</h1>
    </div>
  </div>
);

export default NotificationHeader;
