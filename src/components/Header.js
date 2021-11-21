import React from "react";

// Styles
import "../styles/Header.css";

// Assets
import logo from "../assets/logo.png";
import search from "../assets/icons/search.svg";
import cart from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-content-left">
          <img className="header-content-left-logo" src={logo} alt="Swimli logo in blue text" />
        </div>
        <div className='header-content-right'>
          <nav>
            <span>Toys</span>
            <span>Floats</span>
            <span>Chemicals</span>
            <span>Furniture</span>
            <span>Equipment</span>
            <span>Covers</span>
            <span>Parts & Tools</span>
          </nav>
          <div className='header-action'>
            <input className="header-action-input" type='text' placeholder="Search..." />
            <button className="header-action-input-button">
              <img src={search} alt="magnify glass" />
            </button>
            <img className="header-action-button" src={user} alt="person icon inside of a circle" />
            <img className="header-action-button" src={cart} alt="shopping bag" />
          </div>
        </div>
      </div>

      {/* Login / Register Auth Module */}
      <div className="auth-module-container">
        <div className="auth-module">Auth Module</div>
      </div>
    </header>
  );
};

export default Header;
