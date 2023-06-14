import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function QRCode() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="MainPage">
      <nav className="navbar">
        {" "}
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
            Anasayfa
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/nasil"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Nasıl Oynanır
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/qrcode"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                QR kod
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="QRCode">
        <div className="qrcode">
          <img src={"/images/qrcode.png"} alt="ss" />
        </div>
      </div>{" "}
    </div>
  );
}
