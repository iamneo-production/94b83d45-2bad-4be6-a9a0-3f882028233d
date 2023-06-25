import React from 'react';
import ProfileDetailsComponent from './ProfileDetailsComponent';

const ProfilePage = () => {
  const profile = {
    name: 'Shubham Patil',
    email: 'shubhu244248@gmail.com',
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileDetailsComponent profile={profile} />
      {/* <ProfileUpdateComponent /> */}
    </div>
  );
};

export default ProfilePage;
