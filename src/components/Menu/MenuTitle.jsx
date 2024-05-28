import { useSpring, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "/src/styles/Title-module.css";

const MenuTitle = () => {
  const textAnimationProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 800,
  });

  return (
    <div className="wrapper-title">
      <div className="wrtitle-menu">
        <h5 className="title-shop">
          <span className="spn">
            <animated.span style={textAnimationProps}>
              Explora nuestra variedad de platos gastronómicos
            </animated.span>
          </span>
          <animated.span style={textAnimationProps}>
            <Link to="/pedidos" className="texto-orden">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="icono-pedidos"
              />{" "}
              Ordena en línea
            </Link>
          </animated.span>
        </h5>
      </div>
    </div>
  );
};

export default MenuTitle;
