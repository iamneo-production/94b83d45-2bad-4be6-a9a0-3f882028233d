import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import '../../../assets/styles/Navbar.css'
// import Logo from '../../../assets/images/iconpng.png';

const NavBar = () => {
  return (
    <nav className="navbar bg-white fixed">
      <div className="container items-center ">
        {/* <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Logo" className='logo' />
          <span>Learning Portal</span>
        </Link> */}

        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/studentdashboard" className="navbar-link">My Dashoard</Link>
          </li>
          <li className="navbar-item">
            <Link to="/explore" className="navbar-link">Explore Courses</Link>
          </li>
          <li className="navbar-item">
            <Link to="/notifications" className="navbar-link">Notifications</Link>
          </li>
          <li className="navbar-item">
            <Link to="/freqaskque" className="navbar-link">FaQ</Link>
          </li>
          <li className="navbar-item">
            {/* Your navigation serchbar links */}
            <SearchBar />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;