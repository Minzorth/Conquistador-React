import { useState } from "react";
import chef from "/src/assets/images/chef.png";
import logo from "/src/assets/images/logo.png";
import "/src/styles/Style-module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="header-top">
        <div className="schedule">
          <img src={chef} alt="chef" />
          <div className="schedule-right">
            <div className="phone">Horario de atención</div>
            <div className="time">12:00 pm – 21:30 pm</div>
          </div>
        </div>

        <div className="logo">
          <a href="#">
            <img src={logo} alt="conquistador" />
          </a>
        </div>
        <div className="social-icons">
          <a href="#" className="social-icon facebook-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="social-icon instagram-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-icon twitter-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <div
          className={`menu-btn ${isActive ? "active" : ""}`}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`nav ${isActive ? "active" : ""}`}>
        <li>
          <Link to="/" className="active">
            INICIO
          </Link>
        </li>
        <li>
          <Link to="/nosotros">SOBRE NOSOTROS</Link>
        </li>
        <li>
          <Link to="/menu">MENÚ</Link>
        </li>
        <li>
          <Link to="/pedidos">PEDIDOS ONLINE</Link>
        </li>
        <li>
          <Link to="/registro">REGÍSTRATE</Link>
        </li>
        <li>
          <Link to="/login">ACCEDER</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
