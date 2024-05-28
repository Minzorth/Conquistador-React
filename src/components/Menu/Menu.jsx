import MenuPlato from "/src/components/Menu/MenuPlato";
import "/src/styles/Title-module.css";

import { useEffect } from "react";
function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menu-simple">
      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/simple.png?v=1699551218064"
        title="POLLO SIMPLE"
        price="12 Bs."
        description="Presa de pollo con papas, arroz y fideos, ideal para quienes van al paso. ¡Con aderezos incluidos para una experiencia rápida y sabrosa!"
      />
      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/simple.png?v=1699551218064"
        title="POLLO DOBLE"
        price="16 Bs."
        description="Sumérgete en el placer doble con nuestro pollo, papas, arroz y fideos aderezados. La elección perfecta para saciar tu apetito voraz. ¡No te resistas al festín!"
      />
      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/milanesapollo.png?v=1699542970677"
        title="MILANESA DE POLLO"
        price="30 Bs."
        description="Seducción culinaria con un pollo jugoso, chorizo, papas, plátanos fritos, arroz y fideos, todo aderezado para una experiencia única. ¡Despierta tus sentidos con cada bocado!"
      />
      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/milanesares.png?v=1699542972288"
        title="MILANESA DE RES"
        price="35 Bs."
        description="Disfruta de una exquisita experiencia gastronómica una gran presa de res acompañada de chorizo, papas, plátanos fritos, arroz y fideos, delicadamente aderezados. Un festín culinario que eleva tus sentidos con cada bocado."
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/crikcrack.png?v=1699550645253"
        title="CRICK CRACK"
        price="40 Bs."
        description="¡Crick Crack, la solución para el hambre voraz! Un plato completo, perfecto para esas ocasiones especiales que despiertan tu apetito. ¡Satisfacción garantizada en cada bocado!"
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/cerdo.png?v=1699551039413"
        title="CHULETA DE CERDO"
        price="40 Bs."
        description="Para ocasiones únicas: gran presa de res y cerdo con papas, plátano frito, arroz, fideos y aderezos. ¡Elegancia y sabor en cada bocado!"
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/mani.png?v=1699542969481"
        title="SOPA DE MANÍ"
        price="5 Bs."
        description="Deléitate con nuestra sopa de maní, una explosión de sabores caseros y nutrición en cada cucharada. Descubre el auténtico placer culinario con nosotros."
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/chairo.png?v=1699551577362"
        title="SOPA DE CHAIRO"
        price="6 Bs."
        description="Explora la tradición en cada sorbo con nuestro chairo con sabores únicos y frescos que te reconfortarán. ¡Una experiencia auténtica en cada cucharada!"
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/cocacola.webp?v=1699568042059"
        title="COCA COLA 2L."
        price="12 Bs."
        description="La vida es como beber una Coca-Cola bien fría siempre es mejor cuando la disfrutas sorbo a sorbo y te dejas llevar por su refrescante sabor."
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/cocacola.webp?v=1699568042059"
        title="COCA COLA 3L."
        price="15 Bs."
        description="Imagina abrir una Coca-Cola de 3 litros y desatar una ola de frescura que transforma cada momento. Perfecta para toda la familia."
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/simba.jpg?v=1699568751892"
        title="SIMBA 2L."
        price="10 Bs."
        description="Simba el rugido refrescante que despierta tus sentidos. ¡Haz que tu sed grite de alegría!"
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/mini.jpeg?v=1699542973079"
        title="COCA COLA 150ML."
        price="2 Bs."
        description="Coca-Cola Personal sabor único, solo para ti. Porque cada momento lo vale."
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/pepa.jpeg?v=1699542984398"
        title="MOCONCHINCHI"
        price="2 Bs."
        description="Mocochinchi un refresco tradicional, autenticidad en cada sorbo. ¡Siente la frescura única que solo nosotros ofrecemos de un refresco hervido!"
      />

      <MenuPlato
        imgSrc="https://cdn.glitch.global/74706f28-1d30-4e06-aa91-75b148780bac/chicha.jpeg?v=1699542958401"
        title="CHICHA DE MANÍ"
        price="2 Bs."
        description="Chicha de Maní sabor auténtico, frescura irresistible tomala bien fria. ¡Experimenta la delicia en cada sorbo!"
      />
    </div>
  );
}

export default Menu;
