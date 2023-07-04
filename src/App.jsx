import "./App.css";
import Footer from "./components/Footer.component";
import Carousel from "./components/Carousel.component";

function App() {
  const banners=['https://saskatoonfood.ca/images/headers/1000x200-canola-sky.jpg', 'https://saskatoonfood.ca/images/headers/1000x200-pelican2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/50/Verhnee_Shavlinskoe_ozero_panorama.jpg'];
  return (
    <>
      <Carousel images={banners} />
      <main className="flex justify-center items-center w-screen h-screen bg-background"></main>
      <Footer />
    </>
  );
}

export default App;
