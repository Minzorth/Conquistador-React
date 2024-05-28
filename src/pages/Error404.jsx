import Typewriter from "typewriter-effect";
import notfound from "/src/assets/images/notfound.png";
import "/src/styles/Error-module.css";

const Error404 = () => {
  return (
    <div className="Error-top">
      <img src={notfound} alt="Logo" className="error-logo" />

      <h1>
        <Typewriter
          options={{
            strings: ["Página no encontrada"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <p className="text-error">
        Lo sentimos, la página que estás buscando no existe.
      </p>
    </div>
  );
};

export default Error404;
