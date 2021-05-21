import React from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
import "bootstrap/dist/css/bootstrap.css";

import logo from "./images/icon2.webp";
const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <img className='logo' src={logo} alt='i' />
        <h4 className='title'> EXPENSE TRACKER</h4>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>
                Contact Us
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/registration'>
                Registration
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
