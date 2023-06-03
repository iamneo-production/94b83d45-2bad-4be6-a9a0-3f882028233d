import React from 'react'
import './NavBar.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"

function NavBar(props) {
 
    
  return (
    <div className='navbar-container'>
        
        <div className='navbar-icon-container'>
        <button className='navbar-icon'><AiIcons.AiFillBell/></button>
        <button className='navbar-icon'><FaIcons.FaRegCommentDots /></button>
        <button className='navbar-icon'><FaIcons.FaUser/></button>
        </div>
    </div>
  )
}

export default NavBar