import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileDetails from './ProfileDetails';
import ActionButtons from './ActionButtons';
import NewPostButton from './NewPostButton';

function ProfileSection() {
  return (
    <div className="p-4">
      <ProfileInfo />
      <ProfileDetails />
      <ActionButtons />
      <NewPostButton />
    </div>
  );
}

export default ProfileSection;
