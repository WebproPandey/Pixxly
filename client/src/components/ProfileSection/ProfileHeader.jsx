import React from 'react';
import { Settings, Archive } from 'lucide-react';

function ProfileHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-semibold">amitpande007</h1>
        <Settings className="w-5 h-5 text-blue-500" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2">
          <Archive className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
