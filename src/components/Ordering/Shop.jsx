import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Carrito = ({ carrito, confirmarCompra, vaciarCarrito }) => {
  const total = Array.isArray(carrito)
    ? carrito.reduce((acc, item) => acc + item.precio, 0)
    : 0;

  return (
    <div className="carrito">
      <h2>
        <FontAwesomeIcon icon={faShoppingCart} /> MI PEDIDO
      </h2>
      <ul id="lista-carrito">
        {Array.isArray(carrito) &&
          carrito.map((producto, index) => (
            <li key={index}>
              {producto.nombre} - Bs. {producto.precio.toFixed(2)}
            </li>
          ))}
      </ul>

      <p>
        Total a pagar: Bs. <span id="total">{total.toFixed(2)}</span>
      </p>

      <button onClick={confirmarCompra}>CONFIRMAR PEDIDO</button>

      <button className="black" onClick={vaciarCarrito}>
        VACIAR CARRITO
      </button>
    </div>
  );
};

Carrito.propTypes = {
  carrito: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    })
  ).isRequired,
  confirmarCompra: PropTypes.func.isRequired,
  vaciarCarrito: PropTypes.func.isRequired,
};

export default Carrito;
