import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "/src/styles/Loading-module.css";

const Preloader = () => {
  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <div className="preloader-container">
      <img src="/src/assets/images/logo.png" alt="Logo" className="logo-load" />
      <p>Cargando...</p>
    </div>
  );
};

export default Preloader;
