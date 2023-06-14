import Data from "../../Data";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function MainPage() {
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
      <div className="hero-container">
        <div className="hero-text">
          <h1>Felsefe Quizi</h1>
          <p>
            Bu oyundaki amaç size sorulan sorulara seçtiğiniz filozofun
            düşüncelerine dayanarak cevap vermektir.Başarılar :)
          </p>
          <br />

          <button className="more">
            <Link to={"/nasil"}> Daha fazla</Link>
          </button>
        </div>
      </div>

      <div className="Filozoflar">
        {Data.map((data) => (
          <div className="philosopher">
            <img src={data.resim} alt={data.ad} />
            <div className="philosopher-info">
              <h1>{data.ad}</h1>
              <button className="basla">
                <Link to={data.url}>Başla</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
/*import Data from "../../Data";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function MainPage() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="MainPage">
      <br /> <br />
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
              <Link
                to="/"
                className="nav-links"
                onClick={() => setClick(false)}
              >
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
      <h1 className="label">Felsefe Quizi</h1>
      <div className="Filozoflar">
        {Data.map((data) => (
          <div>
            <img src={data.resim}></img>
            <h1>{data.ad}</h1>
            <button>
              <Link to={data.url}>Başla</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
