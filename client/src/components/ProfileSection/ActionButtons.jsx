import React from 'react';

function ActionButtons() {
  return (
    <div className="flex space-x-2 mb-4">
      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors">
        Edit profile
      </button>
      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors">
        View archive
      </button>
    </div>
  );
}

export default ActionButtons;
