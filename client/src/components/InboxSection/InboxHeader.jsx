
import React from 'react';
import { ArrowLeft, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

const InboxHeader = () => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
    <div className="flex items-center space-x-3">
      <Link to='/home' className="p-1 hover:bg-gray-100 rounded-full transition-colors">
        <ArrowLeft className="w-6 h-6 text-gray-900" />
      </Link>
      <div className="flex items-center space-x-1">
        <h1 className="text-lg font-semibold text-gray-900">amitpande007</h1>
        <Link to="/auth/login">
        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        </Link>
      </div>
    </div>
    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
      <Edit className="w-6 h-6 text-gray-900" />
    </button>
  </div>
);

export default InboxHeader;
