import { Link } from "react-router-dom";
import { useSpring, animated, config } from "@react-spring/web";
import logo from "/src/assets/images/logo.png";
import imgLeft from "/src/assets/images/image.png";
import imgRight from "/src/assets/images/image.png";
import "/src/styles/Menu-module.css";
const MenuNav = () => {
  const imageAnimationConfig = { duration: 1500, config: config.slow };
  const textAnimationConfig = { duration: 2000, config: config.slow };
  const leftImageProps = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: imageAnimationConfig,
  });

  const rightImageProps = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: imageAnimationConfig,
  });

  const textProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: textAnimationConfig,
  });

  return (
    <header>
      <div className="top-menu">
        <div className="left-contenedor">
          <div className="contenedor-item">
            <animated.img
              style={leftImageProps}
              src={imgLeft}
              alt="izquierda"
            />
            <animated.span style={textProps}>
              Deléitate con nuestra gastronomia
            </animated.span>
          </div>
        </div>
        <Link to="/" className="logo-contenedor">
          <div className="log">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div className="right-contenedor">
          <div className="contenedor-item">
            <animated.img
              style={rightImageProps}
              src={imgRight}
              alt="derecha"
            />
            <animated.span style={textProps}>
              Sumérgete en nuestro menú variado
            </animated.span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuNav;
