import React from "react";
import { FaMoon } from "react-icons/fa";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className='app__navbar'>
      <h2 className='navbar-logo'>Where in the world?</h2>
      <div className='navbar-theme-switcher'>
        <button className='theme-switcher-button' onClick={() => console.log("change theme mode")}>
          <FaMoon className='theme-switcher-button-icon' />
        </button>
        <h3>Dark Mode</h3>
      </div>
    </nav>
  );
};

export default NavBar;
