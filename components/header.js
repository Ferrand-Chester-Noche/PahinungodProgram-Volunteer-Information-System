import React from 'react';
import './Header.css'; // Import the CSS file for styles

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img className="logo" src="/image/logo1.png" />
        <img className="logo" src="/image/logo2.png" />
        <div className="text">
          <div>University of the Philippines</div>
          <div>Ugnayan ng Pahinungod Manila</div>
        </div>
      </div>
      <div>
        <button className="loginBtn">
            Login as Admin
        </button>
      </div>
    </div>
  );
};

export default Header;
