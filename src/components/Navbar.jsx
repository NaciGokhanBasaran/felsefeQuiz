import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
          Logo
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setClick(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
