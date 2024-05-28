import Header from "../components/Home/Header";
import papas from "/src/assets/images/papas.png";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import "../styles/About-module.css";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Header />
      <div className="about">
        <div className="container">
          <h2>
            <Typewriter
              options={{
                strings: ["Acerca de nosotros"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
              }}
            />
          </h2>
          <p>
            Restaurante El Conquistador ha consolidado su excelente sabor y
            apunta a ser el establecimiento gastronómico más exitoso.
          </p>
          <img className="papas" src={papas} alt="papas" />
          <h3 className="mision">NUESTRA MISIÓN</h3>
          <p>
            Nuestra misión es ofrecer a nuestros clientes una experiencia
            gastronómica excepcional, donde cada plato sea una expresión de
            creatividad y pasión por la cocina. Nos esforzamos por utilizar
            ingredientes frescos y de la más alta calidad, y por brindar un
            ambiente acogedor y un servicio amable y profesional.
          </p>
          <h3 className="mision">NUESTRA VISIÓN</h3>
          <p>
            Ser reconocidos como el restaurante líder en la industria
            gastronómica, destacando por nuestra innovación culinaria, la
            calidad de nuestros platos y el excelente servicio al cliente.
          </p>

          <p>
            ¡Gracias por elegirnos y esperamos verte pronto en nuestro
            restaurante!
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
