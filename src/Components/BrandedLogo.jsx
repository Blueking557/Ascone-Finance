// Import the images at the top
import LoomImg from "../assets/Images/loom.jpg";
import HubspotImg from "../assets/Images/hubspot.webp";
import OpenAIImg from "../assets/Images/OpenAI.webp";
import RaycastImg from "../assets/Images/raycast-logo.png";
import ZennefitsImg from "../assets/Images/zennefits.webp";

function BrandLogos() {
  return (
    <section className="w-full py-14 overflow-hidden">
      <div className="relative">
        
        {/* Moving Track */}
        <div className="flex w-max animate-marquee gap-20 items-center">
          
          <img src={LoomImg} alt="Loom" className="h-10 md:h-12 opacity-70" />
          <img src={HubspotImg} alt="HubSpot" className="h-11 md:h-13 opacity-70" />
          <img src={OpenAIImg} alt="OpenAI" className="h-11 md:h-13 opacity-70" />
          <img src={RaycastImg} alt="Raycast" className="h-10 md:h-12 opacity-70" />
          <img src={ZennefitsImg} alt="Zenefits" className="h-11 md:h-13 opacity-70" />

          {/* duplicate for smooth loop */}
          <img src={LoomImg} alt="Loom" className="h-10 md:h-12 opacity-70" />
          <img src={HubspotImg} alt="HubSpot" className="h-11 md:h-13 opacity-70" />
          <img src={OpenAIImg} alt="OpenAI" className="h-11 md:h-13 opacity-70" />
          <img src={RaycastImg} alt="Raycast" className="h-10 md:h-12 opacity-70" />
          <img src={ZennefitsImg} alt="Zenefits" className="h-11 md:h-13 opacity-70" />

        </div>
      </div>
    </section>
  );
}

export default BrandLogos;