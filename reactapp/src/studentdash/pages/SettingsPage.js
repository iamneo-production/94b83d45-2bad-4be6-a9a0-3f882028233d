import React, { useState } from 'react';
import Navbar from '../components/studentdashboard/common/Navbar';
import SettingDetails from './SettingDetails';


function SettingPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const profile = {
    name: 'Shubham Patil',
    email: 'shubhu244248@gmail.com',
    Password: 'Shubhu@2000',
    confirm_Password: '',
  };

  const handleNotificationsChange = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>

        <SettingDetails profile={profile} />
        {/* <ProfileUpdateComponent /> */}
      </div>
      <label>
        Enable Notifications:
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={handleNotificationsChange}
        />
      </label>

      <p>Notifications: {notificationsEnabled ? 'Enabled' : 'Disabled'}</p>


    </div>
  );
}

export default SettingPage;
