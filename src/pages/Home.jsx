import Header from "/src/components/Home/Header";
import Carousel from "/src/components/Home/Carousel";
import Body from "/src/components/Home/Body";
import Services from "/src/components/Home/Services";
import Footer from "/src/components/Home/Footer";

export function Home() {
  return (
    <main>
      <Header />
      <Carousel />
      <Body />
      <Services />
      <Footer />
    </main>
  );
}
