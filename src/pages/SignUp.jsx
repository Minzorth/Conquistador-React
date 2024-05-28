import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo.png";
import "/src/styles/Signup-module.css";
import { useEffect } from "react";

const SignupForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validationSchema = Yup.object().shape({
    nombres: Yup.string().required("El nombre es requerido"),
    apellidos: Yup.string().required("El apellido es requerido"),
    cedula: Yup.string().required("La cédula es requerida"),
    correo: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es requerido"),
    contraseña: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
    celular: Yup.string().required("El número de celular es requerido"),
  });

  const handleSubmit = (values, actions) => {
    console.log("Valores del formulario:", values);
    actions.setSubmitting(false);
  };

  return (
    <div className="Sign-top">
      <div className="form-container">
        <Formik
          initialValues={{
            nombres: "",
            apellidos: "",
            cedula: "",
            correo: "",
            contraseña: "",
            celular: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <h2 className="info-form">Regístrate</h2>
            <img className="logo-register" src={logo} alt="Logo" />
            <p className="info">
              Regístrate y podrás acceder a múltiples beneficios.
            </p>
            <h3 className="user-date">DATOS DEL USUARIO</h3>

            <div className="input-group">
              <div className="input-column">
                <Field
                  type="text"
                  id="nombres"
                  name="nombres"
                  placeholder="Nombres"
                />
                <ErrorMessage
                  name="nombres"
                  component="div"
                  className="error-message"
                />
                <Field
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Apellidos"
                />
                <ErrorMessage
                  name="apellidos"
                  component="div"
                  className="error-message"
                />
                <Field
                  type="text"
                  id="cedula"
                  name="cedula"
                  placeholder="Cédula de Identidad"
                />
                <ErrorMessage
                  name="cedula"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-column">
                <Field
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Correo Electrónico"
                  autoComplete="username"
                />
                <ErrorMessage
                  name="correo"
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
                <Field
                  type="text"
                  id="celular"
                  name="celular"
                  placeholder="Número de Celular"
                />
                <ErrorMessage
                  name="celular"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>

            <Link to="/">
              <button type="submit" className="register-button">
                Regístrate
              </button>
            </Link>
            <span className="sign-account">O Conéctate con tu cuenta</span>
            <div className="google">
              <a href="#" className="social-g">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
