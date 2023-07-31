import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/Navbar.css'
// import Logo from '../../../assets/images/3135715.png';


const VerticalNav = () => {
    return (
        <div className="vertical_nav bg-gray-800 text-white w-64 ">
            <ul className="py-4 ">

                {/* <img class="w-12 h-12 rounded-full mr-4" src={Logo} alt="" /> */}
                {/* <Link to="./" class="w-12 h-12 rounded-full ml-2">
                    <img src={Logo} alt="Logo" className='logo' />
                </Link> */}

                <li className="px-4 py-2">
                    <Link to="/profile" className="navbar-link">Profile</Link>
                </li>
                <li className="px-4 py-2">
                    <Link to="/explore" className="navbar-link">Enrolled Courses</Link>
                </li>
                <li className="px-4 py-2">
                    <Link to="/quizprogress" className="navbar-link">Quizzes</Link>
                </li>
                <li className="px-4 py-2">
                    <Link to="/settings" className="navbar-link">Settings</Link>
                </li>
            </ul>
        </div>

    );
};

export default VerticalNav;