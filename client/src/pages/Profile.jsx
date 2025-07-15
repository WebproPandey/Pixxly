// pages/Profile.jsx

import React, { useState } from 'react';
import ProfileSection from '../components/ProfileSection/ProfileSection';
import NavigationTabs from '../components/ProfileSection/NavigationTabs';
import PostsGrid from '../components/ProfileSection/PostsGrid';
import ProfileHeader from '../components/ProfileSection/ProfileHeader';

function Profile() {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?...',
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?...',
    'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?...',
    'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?...',
    'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?...',
    'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?...',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <ProfileHeader/>
        <ProfileSection />
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'posts' && <PostsGrid posts={posts} />}
        {/* Add other tab content here */}
      </div>
    </div>
  );
}

export default Profile;
