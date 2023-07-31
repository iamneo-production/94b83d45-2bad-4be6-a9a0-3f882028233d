import React from 'react';
import ProfileDetailsComponent from './ProfileDetailsComponent';
import Navbar from '../components/studentdashboard/common/Navbar';

const ProfilePage = () => {
  const profile = {
    name: 'Shubham Patil',
    email: 'shubhu244248@gmail.com',
  };

  return (
    <div>
      <Navbar></Navbar>

      <ProfileDetailsComponent profile={profile} />
      {/* <ProfileUpdateComponent /> */}
    </div>
  );
};

export default ProfilePage;
