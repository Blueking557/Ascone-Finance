import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import MotionWrapper from "./MotionWrapper";

// Import all images
import Money1Img from "../assets/Images/Money1.jpg";
import Profile1Img from "../assets/Images/Profile1.jpeg";
import Profile2Img from "../assets/Images/Profile2.jpeg";
import AmericaFlag from "../assets/Images/America.png";
import GermanyFlag from "../assets/Images/Germany.jpeg";
import NigFlag from "../assets/Images/Nig.png";

function About() {
  return (
    <section className="m-6 md:m-10 p-6 flex flex-col items-center">

      {/* Header */}
      <div className="text-center space-y-3 md:space-y-4 mb-10">
        <MotionWrapper variant="down" delay={0} whileInView viewport={{ once: true, amount: 0.3 }}>
          <Link to="/about">
            <h1 className="text-green-700 text-sm md:text-base">About Us</h1>
          </Link>
        </MotionWrapper>

        <MotionWrapper variant="right" delay={0.2} whileInView viewport={{ once: true, amount: 0.3 }}>
          <h1 className="text-[#143c36] text-2xl md:text-3xl font-semibold">
            One app for all your <br /> money things
          </h1>
        </MotionWrapper>

        <MotionWrapper variant="left" delay={0.4} whileInView viewport={{ once: true, amount: 0.3 }}>
          <p className="text-sm md:text-base text-gray-600">
            Remove all the friction that stands in the way of <br />
            your money goals
          </p>
        </MotionWrapper>
      </div>

      {/* Main container */}
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-6xl">

        {/* LEFT DIV */}
        <div className="bg-[#143c36] relative h-64 md:h-96 w-full lg:w-[28%] p-4 flex flex-col justify-end">

          <div className="absolute top-4 left-4 text-white text-lg md:text-2xl font-semibold">
            Grow Savings <br /> Faster
          </div>

          <div className="flex justify-between items-end h-full space-x-4">
            <div className="w-6 bg-white/20 h-16 md:h-20"></div>
            <div className="w-6 bg-white/20 h-24 md:h-28"></div>

            <div className="relative w-6 h-32 md:h-40 bg-white flex flex-col items-center justify-end">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-white font-bold">
                $20,000
              </span>
            </div>

            <div className="w-6 bg-white/20 h-20 md:h-24"></div>
            <div className="w-6 bg-white/20 h-28 md:h-32"></div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <div className="bg-[#e9f1ef] rounded-bl-[30%] w-auto lg:w-[72%] p-10 relative hidden lg:block">

          <MotionWrapper variant="right" delay={0} whileInView viewport={{ once: true, amount: 0.3 }}>
            <h1 className="absolute top-6 left-[15%] text-3xl font-semibold text-[#143c36] space-x-10">
              Send across the global
            </h1>
          </MotionWrapper>

          {/* LEFT CARD */}
          <div className="absolute left-[20%] top-[20%]">
            <div className="w-40 h-44 bg-white shadow-lg overflow-hidden flex flex-col">
              <div className="h-1/2 w-full bg-gray-100">
                <img src={Money1Img} alt="" className="object-contain"/>
              </div>
              <div className="h-1/2 w-full flex flex-col items-center justify-center mt-2 text-center">
                <h1 className="text-3xl text-[#143c36] ">$25,000</h1>
                <p className="items-start text-green-700">Sent bro!</p>
              </div>
            </div>

            <div className="absolute left-[10%] top-[110%] flex -space-x-2">
              <img src={Profile1Img} className="w-10 h-10 rounded-full object-cover" />
              <img src={Profile2Img} className="w-10 h-10 rounded-full object-cover" />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="absolute right-[25%] top-[20%]">
            <div className="relative w-[160px] h-[75px] bg-[#143c36] text-white shadow-lg p-4">
              <h2 className="text-2xl ">$40,000</h2>
              <p className="text-xs">Thanks Chris!</p>
            </div>
            <img
              src={Profile2Img}
              alt=""
              className="mt-3 w-12 h-12 rounded-full object-cover"
            />
          </div>

          {/* FLAGS */}
          <div className="absolute left-1/2 top-[67%] translate-x-[140px] flex -space-x-2">
            <img src={AmericaFlag} className="w-10 h-10 rounded-full object-cover" />
            <img src={GermanyFlag} className="w-10 h-10 rounded-full object-cover" />
            <img src={NigFlag} className="w-10 h-10 rounded-full object-fill" />
          </div>

          {/* GLOBE */}
          <div className="absolute left-1/2 top-[77%] -translate-x-1/2 -translate-y-1/2">
            <Globe size={150} strokeWidth={0.2} className="text-[#23574f]" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;