import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Nasil() {
  const [click, setClick] = useState(false);
  /*by Naci Gökhan Baaşaran */
  const handleClick = () => setClick(!click);
  return (
    <div className="NasilDiv">
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
      </nav>{" "}
      <div className="nasilup">
        <div className="Nasil">
          <br />
          <br />
          <div className="label">
            <h1>Nasıl Oynanır?</h1>
          </div>
          <div className="text">
            <p>
              Oyunun amacı size sorulan sorulara seçtiğiniz filozof gibi cevap
              vermektir .Anasayfadaki herhangi bir filozofun altındaki başla
              butonuna basın sizi gönderdiği yer seçtiğiniz filozof hakkında
              bilgi verecektir.sonra quize başlaya basın.quizde diğer soruya
              geçmek için doğru cevabı vermeniz gerkmektedir.
            </p>
            <br />
            <p>
              Eğer yanlış cevaplardan birine tıklarsanız Canınız azalır.Canınız
              0 ın altına geçtiği zaman oyunu kaybedersiniz.Eğer bir şıkkı
              seçtiğinizde canınız azalmadıysa o şık doğrudur.
            </p>
            <br />
            <p>
              Web sitesi:11/B 855 Naci Gökhan Başaran Sorular:11/B 857 Kerem
              Ziver Aktaş 11/B 869 Tarık Çelik
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
