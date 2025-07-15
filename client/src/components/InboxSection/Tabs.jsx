import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="flex border-b border-gray-200 mb-2">
    <button
      onClick={() => setActiveTab('messages')}
      className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
        activeTab === 'messages'
          ? 'text-gray-900 border-b-2 border-gray-900'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      Messages
    </button>
    <button
      onClick={() => setActiveTab('requests')}
      className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
        activeTab === 'requests'
          ? 'text-gray-900 border-b-2 border-gray-900'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      Requests
    </button>
  </div>
);

export default Tabs;
