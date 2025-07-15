import React from 'react';
import { Camera } from 'lucide-react';

function NewPostButton() {
  return (
    <div className="mb-6">
      <button className="w-16 h-16 border-2 border-gray-300 border-dashed rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400 transition-colors">
        <Camera className="w-6 h-6" />
      </button>
      <p className="text-xs text-gray-500 mt-1">New</p>
    </div>
  );
}

export default NewPostButton;
