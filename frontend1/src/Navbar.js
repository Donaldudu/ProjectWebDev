import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li>
        <NavLink to="User" style={{ textDecoration: "none", color: "white",  }}>
          <strong>

          User
          </strong>
          
          </NavLink>

        </li>
        <li>
          <NavLink to="Course" style={{textDecoration: "none", color: "white"}}>
          <strong>
            Course
          </strong>
            </NavLink>
        </li>
        <li>
          <NavLink to="ViewFeedbacks" style={{textDecoration: "none", color: "white"}}>
          <strong>
            Feedbacks
          </strong>
            </NavLink>
        </li>
        <li>
          <NavLink to="Account" style={{textDecoration: "none", color: "white"}}>
          <strong>
            Account
          </strong>
            </NavLink>
        </li>
        <li>
        <NavLink to="Academics" style={{ textDecoration: "none", color: "white" }}>
        <strong>
          Academics
</strong>
          </NavLink>
        </li>
      </ul>
      {/* <button className='butt' onClick={logout}>
        Logout
      </button> */}
    </nav>
  );
};

export default Navbar;
