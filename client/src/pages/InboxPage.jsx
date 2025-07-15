// File: src/pages/InboxPage.jsx
import React, { useState } from 'react';
import InboxHeader from '../components/InboxSection/InboxHeader';
import Stories from '../components/InboxSection/Stories';
import SearchBar from '../components/InboxSection/SearchBar';
import Tabs from '../components/InboxSection/Tabs';
import MessagesList from '../components/InboxSection/MessagesList';

const InboxPage = () => {
  const [activeTab, setActiveTab] = useState('messages');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <InboxHeader/>
        <SearchBar/>
        <Stories/>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <MessagesList activeTab={activeTab} />
      </div>
    </div>
  );
};

export default InboxPage;
