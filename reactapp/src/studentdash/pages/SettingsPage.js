import React, { useState } from 'react';

function SettingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNotificationsChange = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  return (
    <div>
      <h2>Many things are remaining for the account settings</h2>

      <label type="text-blue-500">
        Name:
        <input type="text-blue-500" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
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
