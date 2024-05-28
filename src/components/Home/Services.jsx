import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import delivery from "/src/assets/images/delivery.png";
import calidad from "/src/assets/images/calidad.png";
import pedidos from "/src/assets/images/online.png";
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [ref, inView] = useInView({ triggerOnce: true });

  const titleAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1000 },
  });

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1500 },
  });

  useEffect(() => {
    if (inView) {
      //
    }
  }, [inView]);

  return (
    <section className="services" ref={ref}>
      <animated.h2 style={titleAnimation}>
        ¡Descubre nuestros servicios para ti!
      </animated.h2>
      <div id="contenedor-tarjetas">
        <animated.div style={cardAnimation} className="tarjeta" id="tarjeta1">
          <h3>ENVIOS A DOMICILIO</h3>
          <img src={delivery} alt="delivery" />
          <div>
            <p>Ofrecemos entrega a domicilio con rapidez y eficiencia.</p>
            <p>
              ¡Estaremos preparados para recibirte en tu puerta en cuanto
              realices tu pedido!
            </p>
          </div>
        </animated.div>
        <animated.div style={cardAnimation} className="tarjeta" id="tarjeta2">
          <h3>Trato atento y profesional</h3>
          <img src={calidad} alt="calidad" />
          <div>
            <p>
              Nuestro compromiso es ofrecerte atención de calidad en cada paso
              del camino.
            </p>
            <p>
              ¡Ven y descubre cómo hacemos que cada momento sea especial para
              ti!
            </p>
          </div>
        </animated.div>
        <animated.div style={cardAnimation} className="tarjeta" id="tarjeta3">
          <h3>PEDIDOS ONLINE</h3>
          <img src={pedidos} alt="pedido" />
          <div>
            <p>
              Realiza tus pedidos de forma rápida y sencilla directamente desde
              nuestra página web.
            </p>
            <p>¡Solo debe registrarse!</p>
          </div>
        </animated.div>
      </div>
    </section>
  );
}

export default Services;
