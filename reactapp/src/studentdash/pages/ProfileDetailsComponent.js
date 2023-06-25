import React, { useState } from 'react';

const ProfileDetailsComponent = ({ profile }) => {
    const [editing, setEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState(profile);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        console.log('Profile saved:', editedProfile);
        setEditing(false);
    };

    const handleCancel = () => {
        setEditedProfile(profile);
        setEditing(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <div className="flex justify-center" >
            <form onSubmit={handleSave} className="w-1/2 sm:w-1/3">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Name:
                    </label>
                    {editing ? (
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={editedProfile.name}
                            onChange={handleInputChange}
                            className="w-full border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    ) : (
                        <p>{profile.name}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                        Email:
                    </label>
                    {editing ? (
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={editedProfile.email}
                            onChange={handleInputChange}
                            className="w-full border-blue-500 rounded focus:outline-none focus:border-blue-500"
                        />
                    ) : (
                        <p>{profile.email}</p>
                    )}
                </div>
                {editing ? (
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 mr-2 ml-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Save
                        </button>
                        <button onClick={handleCancel}
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 mr-2 ml-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    // <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleEdit}
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Update Profile
                    </button>
                )}
            </form>

        </div>
    );
};

export default ProfileDetailsComponent;


