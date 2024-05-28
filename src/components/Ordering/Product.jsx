import PropTypes from "prop-types";

const Producto = ({ imgSrc, nombre, precio, agregarAlCarrito }) => {
  return (
    <div className="producto" onClick={() => agregarAlCarrito(nombre, precio)}>
      <img src={imgSrc} alt={nombre} />
      <p className="nombre">{nombre}</p>
      <p className="precio">{precio} Bs.</p>
    </div>
  );
};

Producto.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  agregarAlCarrito: PropTypes.func.isRequired,
};

export default Producto;
