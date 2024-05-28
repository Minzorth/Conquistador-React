import PropTypes from "prop-types";
import "/src/styles/Plato-module.css";
function MenuPlato({ imgSrc, title, price, description }) {
  return (
    <div className="simple-menu">
      <img src={imgSrc} alt="" />
      <div className="menu-simple">
        <h4>
          {title}
          <span className="price">{price}</span>
        </h4>
        <p className="tx">{description}</p>
      </div>
    </div>
  );
}

MenuPlato.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MenuPlato;
