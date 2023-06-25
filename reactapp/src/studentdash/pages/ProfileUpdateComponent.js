import React, { useState } from 'react';

const ProfileUpdateComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const updateProfile = async () => {
            try {
                // Make an API request to update the profile data
                const response = await fetch('/api/profile', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                    }),
                });

                if (response.ok) {
                    console.log('Profile updated successfully');
                } else {
                    console.log('Profile update failed');
                }
            } catch (error) {
                console.log('Profile update failed:', error.message);
            }
        };
        updateProfile();
    };


    return (
        <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Profile Update</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="w-full border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default ProfileUpdateComponent;
