import Carousel from "react-bootstrap/Carousel";
import banner1 from "/src/assets/images/banner-1.jpg";
import banner2 from "/src/assets/images/banner-2.png";
import banner3 from "/src/assets/images/banner-3.jpg";
import banner4 from "/src/assets/images/banner-4.webp";
import "/src/styles/Carrusel-module.css";
import { useEffect } from "react";
function MyCarousel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="uno" />

        <Carousel.Caption>
          <h5 className="Carousel-title">Disfruta con El Conquistador</h5>
          <p className="Carousel-text">
            Placer para el paladar, festín para los sentidos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="dos" />
        <Carousel.Caption>
          <h5 className="Carousel-title">
            Platos que cuentan historias, sabores que crean recuerdos
          </h5>
          <p className="Carousel-text">
            Promete una experiencia gastronómica satisfactoria y placentera.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="tres" />
        <Carousel.Caption>
          <h5 className="Carousel-title">
            Sabores que despiertan tus sentidos
          </h5>
          <p className="Carousel-text">
            Explora nuestro menú, descubre nuevas delicias.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner4} alt="cuatro" />
        <Carousel.Caption>
          <h5 className="Carousel-title">
            Una carta de sabores, una experiencia inolvidable
          </h5>
          <p className="Carousel-text">
            Invita a los comensales a explorar la variedad de platos
            disponibles.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
