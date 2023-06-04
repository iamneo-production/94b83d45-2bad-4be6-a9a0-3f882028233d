import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Replace `FaIconName` with the desired icon from the react-icons library

const Icon = () => {
  const iconStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    fontSize: '50px',
    color: 'red',
    borderradius: '50%',
    background: 'transparent',
    border: '2px solid red',
    padding: '5px',
    // fontsize: '30px',
    cursor: 'pointer',
    // Add any additional styles you want for the icon
  };

  const handleClick = () => {
    // Handle click event for the icon
    console.log('Icon clicked!');
  };

  return (
    <div style={iconStyle} onClick={handleClick}>
      <AiOutlineShoppingCart />
    </div>
  );
};

export default Icon;