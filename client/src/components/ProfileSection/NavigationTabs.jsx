import React from 'react';
import { Grid, Camera, Bookmark, User } from 'lucide-react';

function NavigationTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'posts', icon: <Grid className="w-5 h-5" /> },
    { id: 'reels', icon: <Camera className="w-5 h-5" /> },
    { id: 'saved', icon: <Bookmark className="w-5 h-5" /> },
    { id: 'tagged', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map(({ id, icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`flex-1 py-3 flex items-center justify-center ${
            activeTab === id
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}

export default NavigationTabs;
