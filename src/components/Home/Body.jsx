import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import muestra from "/src/assets/images/muestra.png";
import "/src/styles/Style-module.css";

function Body() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showAnimations, setShowAnimations] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setShowAnimations(true);
    }
  }, [inView]);

  const slideInTitle = useSpring({
    opacity: showAnimations ? 1 : 0,
    transform: showAnimations ? "translateY(0)" : "translateY(40px)",
    from: { opacity: 0, transform: "translateY(40px)" },
    config: { duration: 1500 },
  });

  const fadeInSubtitle = useSpring({
    opacity: showAnimations ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1200 },
  });

  const buttonAnimation = useSpring({
    opacity: showAnimations ? 1 : 0,
    transform: showAnimations ? "translateY(0)" : "translateY(40px)",
    from: { opacity: 0, transform: "translateY(40px)" },
    config: { duration: 1500 },
  });

  const imgAnimation = useSpring({
    opacity: showAnimations ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <div className="hero" ref={ref}>
      <div className="imgBx">
        <animated.img src={muestra} alt="muestra" style={imgAnimation} />
      </div>

      <div className="contentBx">
        <h1>
          <Typewriter
            options={{
              strings: ["BIENVENIDO A EL CONQUISTADOR"],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h1>
        <animated.h2 className="Text-mod" style={slideInTitle}>
          <animated.span style={fadeInSubtitle}>
            Descubre la esencia de nuestra cocina nacional en El Conquistador.
          </animated.span>
        </animated.h2>
        <animated.p style={fadeInSubtitle}>
          Te invitamos a disfrutar de lo mejor de nuestra cocina nacional.
        </animated.p>
        <animated.p style={fadeInSubtitle}>
          ¡Ven y saborea nuestros platos!
        </animated.p>

        <animated.div style={{ ...buttonAnimation }} className="btn">
          <Link to="/menu">NUESTRO MENÚ</Link>
        </animated.div>
        <animated.p style={fadeInSubtitle}>
          <br />
          ¿Listo para disfrutar de nuestros servicios?
        </animated.p>
        <animated.p style={fadeInSubtitle}>
          ¡Regístrate ahora y comienza a vivir una experiencia única!
        </animated.p>

        <animated.div style={{ ...buttonAnimation }} className="btn">
          <Link to="/registro">ÚNETE AQUÍ</Link>
        </animated.div>
      </div>
    </div>
  );
}

export default Body;
