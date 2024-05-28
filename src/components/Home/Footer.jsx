import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "/src/assets/images/logo.png";
import {
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import "/src/styles/Style-module.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box-img">
          <figure>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <hr />
          <br />
          <p>
            Ubicados en el distrito de Catavi, frente a la Plaza Triangular,
            somos un restaurante dedicado a brindar experiencias gastronómicas
            únicas.
          </p>
        </div>
        <div className="box">
          <h2>Comunicate con nosotros</h2>
          <div className="red-social">
            <a
              id="whatsappLink"
              href="https://api.whatsapp.com/send?phone=+59160498774&text=Hola,%20me%20gustaría%20hacer%20una%20consulta.%20Gracias."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="mailto:kimlycan@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.messenger.com/t/100056441238908"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          Desarrollado por{" "}
          <a href="https://www.facebook.com/profile.php?id=100056441238908">
            Jorge Luis Montaño Choque
          </a>
          <br />
          Restaurant El Conquistador
        </small>
      </div>
    </footer>
  );
};

export default Footer;
