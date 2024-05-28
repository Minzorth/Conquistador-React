import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import About from "../pages/About";
import { Carta } from "../pages/Carta";
import SignupForm from "../pages/SignUp";
import LoginForm from "../pages/LogIn";
import Preloader from "../pages/Preloader";
import { OrderPage } from "../pages/OrderPage";
import Error404 from "../pages/Error404";

export function MyRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {loading && <Route path="/" element={<Preloader />} />}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nosotros" element={<About />} />
        <Route exact path="/menu" element={<Carta />} />
        <Route exact path="/pedidos" element={<OrderPage />} />
        <Route exact path="/registro" element={<SignupForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
