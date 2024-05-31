/** @format */

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navlinks">
          <li>
            <NavLink
              to="/"
    
            >
              Projects
            </NavLink>
          </li>
          <li>
           <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
