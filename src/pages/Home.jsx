import About from "../Components/About";
import Achievements from "../Components/Achievements";
import AnnouncementBar from "../Components/Announcementbar";
import BrandLogos from "../Components/BrandedLogo";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Values from "../Components/Values";
import Homebutton from "../Components/Homebutton"

function Home() {
  return (
    <div>
      <AnnouncementBar/>
      <Navbar />
      <Hero/>
      <BrandLogos/>
      <About/>
      <Values/>
      <FAQ/>
      <Achievements/>
      <Homebutton/>
      <Footer/>
    </div>
  );
}

export default Home;