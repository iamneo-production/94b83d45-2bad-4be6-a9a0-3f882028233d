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
                            type="name"
                            id="name"
                            name="name"
                            value={editedProfile.name}
                            onChange={handleInputChange}
                            className=" bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        />
                    ) : (
                        <p>{profile.name}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className=" text-gray-700">
                        Email:
                    </label>
                    {editing ? (
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={editedProfile.email}
                            onChange={handleInputChange}
                            className=" bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
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

// import React, { useState } from 'react';

// const ProfileDetailsComponent = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Perform save changes logic here
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Password:', password);
//         // You can send the updated profile data to an API or perform any other actions
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
//                 <div className="px-6 py-4">
//                     <h2 className="text-2xl font-bold mb-2">Profile</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             Save Changes
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default ProfileDetailsComponent;


