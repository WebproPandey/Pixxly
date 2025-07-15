import React from 'react';

function ProfileInfo() {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?..."
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-200"
        />
      </div>
      <div className="flex-1">
        <div className="flex space-x-8">
          <div className="text-center">
            <div className="font-semibold text-lg">10</div>
            <div className="text-gray-600 text-sm">posts</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg">78</div>
            <div className="text-gray-600 text-sm">followers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg">58</div>
            <div className="text-gray-600 text-sm">following</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
