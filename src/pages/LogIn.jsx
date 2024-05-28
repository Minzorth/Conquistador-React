import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "/src/assets/images/logo.png";
import "/src/styles/Login-module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validationSchema = Yup.object().shape({
    usuario: Yup.string().required("El usuario es requerido"),
    contraseña: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
  });

  const handleSubmit = (values, actions) => {
    console.log("Valores del formulario:", values);
    actions.setSubmitting(false);
  };

  return (
    <div className="Sign-log">
      <div className="form-log">
        <Formik
          initialValues={{
            usuario: "",
            contraseña: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <h2 className="info-log">Iniciar Sesión</h2>
            <img className="logo-register" src={logo} alt="Logo" />
            <p className="info">Hola que gusto tenerte aqui otra vez.</p>
            <h3 className="user-log">Datos del usuario</h3>

            <Field
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              autoComplete="username"
            />
            <ErrorMessage
              name="usuario"
              component="div"
              className="error-message"
            />
            <Field
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="Contraseña"
              autoComplete="current-password"
            />
            <ErrorMessage
              name="contraseña"
              component="div"
              className="error-message"
            />
            <Link to="/">
              <button type="submit" className="register-button">
                Ingresar
              </button>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
