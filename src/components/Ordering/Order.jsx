import { useState } from "react";
import Producto from "/src/components/Ordering/Product";
import Carrito from "/src/components/Ordering/Shop";
import jsPDF from "jspdf";
import "/src/styles/Order-modules.css";
import logo from "/src/assets/images/logo.png";
const Order = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (nombre, precio) => {
    const producto = { nombre, precio };
    setCarrito([...carrito, producto]);
  };

  const confirmarCompra = () => {
    if (carrito.length === 0) {
      alert(
        "Agrega al menos un producto al carrito antes de confirmar la compra."
      );
    } else {
      const totalPagar = carrito
        .reduce((total, producto) => total + producto.precio, 0)
        .toFixed(2);

      const doc = new jsPDF({
        unit: "px",
        format: [300, 260],
      });

      const textWidth =
        doc.getStringUnitWidth("Detalle de Pedido") *
        doc.internal.getFontSize();

      const marginLeft = (150 - textWidth) / 2;

      const marginTop = 20;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);

      doc.text("Detalle de Pedido", marginLeft, marginTop);

      const logoWidth = 100;
      const logoHeight = 60;
      const logoX = (400 - logoWidth) / 2;
      const logoY = marginTop + 0;

      doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);

      let contentTop = marginTop + 20;

      carrito.forEach((producto, index) => {
        doc.text(
          `${index + 1}. ${producto.nombre} - Bs. ${producto.precio.toFixed(
            2
          )}`,
          marginLeft,
          contentTop + index * 10
        );
      });

      doc.text(
        `Total a pagar: Bs. ${totalPagar}`,
        marginLeft,
        contentTop + carrito.length * 10 + 10
      );

      const nombrePDF = "Reporte de Pedido.pdf";
      doc.save(nombrePDF);

      alert(`¡Pedido realizado con éxito! Se ha generado un PDF del pedido.`);

      setCarrito([]);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <div className="container-order">
      <h1>
        PEDIDOS ONLINE <br />
      </h1>
      <h2 className="ordering">Restaurante El Conquistador</h2>
      <p className="text-order">
        Para realizar tus pedidos solo tienes que darle clic a la imagen del
        producto deseado.
      </p>
      <hr />
      <div className="productos" id="productos-container">
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/simple.png?v=1699551218064"
          nombre="Pollo Simple"
          precio={12}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/milanesapollo.png?v=1699542970677"
          nombre="Milanesa de Pollo"
          precio={30}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/simple.png?v=1699551218064"
          nombre="Pollo Doble"
          precio={16}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/milanesares.png?v=1699542972288"
          nombre="Milanesa de Res"
          precio={35}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/crikcrack.png?v=1699550645253"
          nombre="Crick Crack"
          precio={40}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/cerdo.png?v=1699551039413"
          nombre="Chuleta de Cerdo"
          precio={40}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/mani.png?v=1699542969481"
          nombre="Sopa de Mani"
          precio={5}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/pepa.jpeg?v=1699542984398"
          nombre="MOCONCHINCHI"
          precio={2}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/chairo.png?v=1699551577362"
          nombre="SOPA DE CHAIRO"
          precio={5}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/cocacola.webp?v=1699568042059"
          nombre="COCA COLA 2L."
          precio={12}
          agregarAlCarrito={agregarAlCarrito}
        />

        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/simba.jpg?v=1699568751892"
          nombre="SIMBA 2L."
          precio={10}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Producto
          imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/cocacola.webp?v=1699568042059"
          nombre="COCA COLA 3L."
          precio={15}
          agregarAlCarrito={agregarAlCarrito}
        />
      </div>
      <Carrito
        carrito={carrito}
        confirmarCompra={confirmarCompra}
        vaciarCarrito={vaciarCarrito}
      />
    </div>
  );
};

export default Order;
