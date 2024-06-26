import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <FaArrowLeft className="back-icon" />
      <h2 className="title">Checkout</h2>
    </div>
  );
};

export default Header;
