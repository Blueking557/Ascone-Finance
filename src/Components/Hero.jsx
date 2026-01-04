import { useState } from "react";
import { ArrowUp, ArrowUpRight, Globe, Sparkle } from "lucide-react";
import AuthModal from "./AuthModal";
import MotionWrapper from "./MotionWrapper";

// Import images
import HeroImage from "../assets/Images/hero-image.jpeg";
import Profile1 from "../assets/Images/Profile1.jpeg";
import Profile2 from "../assets/Images/Profile2.jpeg";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 relative">
        <div className="relative flex flex-col lg:flex-row items-start justify-start lg:gap-[1.5in]">

          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-6 text-center lg:text-left z-10 lg:pr-4">
            <MotionWrapper variant="down" delay={0}>
              <h1 className="text-[#143C36] font-bold text-2xl sm:text-5xl md:text-6xl leading-tight">
                Change the way
                you use your <br />
                <span className="italic">money</span>
              </h1>
            </MotionWrapper>

            <MotionWrapper variant="right" delay={0.25}>
              <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                From your everyday spending, to planning your future
                with savings and investments, Ascone helps you get
                more from your money.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="down" delay={0.45}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={openModal}
                  className="bg-[#143c36] text-white px-6 py-3 rounded-full hover:bg-[#1f5b52] transition"
                >
                  Get Started Now
                </button>

                <div className="flex flex-col items-center sm:items-start text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    ⭐⭐⭐⭐⭐
                    <span className="font-bold text-black">5.0</span>
                  </div>
                  <p className="text-xs mt-1">(from 120+ reviews)</p>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT SIDE */}
          <MotionWrapper variant="right" delay={0.75}>
            <div className="flex flex-wrap justify-center md:justify-start lg:justify-start mt-6 lg:mt-0">

              {/* CARD 1 */}
              <div className="relative bg-gray-300 
                h-48 w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 
                overflow-hidden">

                <div className="absolute top-5 right-1/4 flex flex-col items-end space-y-2">
                  <MotionWrapper variant="left" delay={0.95} repeat={2}>
                    <div className="bg-white w-12 h-2.5"></div>
                  </MotionWrapper>

                  <MotionWrapper variant="right" delay={1.1} repeat={2}>
                    <div className="bg-white w-6 h-2.5"></div>
                  </MotionWrapper>
                </div>

                <img
                  src={HeroImage}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARD 2 */}
              <div className="relative bg-[#ebe8d8] rounded-l-full 
                h-48 w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 
                flex items-center justify-center text-sm font-light">
                <p className="absolute top-6 right-7 text-3xl md:text-4xl font-serif">
                  56+
                </p>
                <p className="absolute text-[#143c36] font-normal text-base md:text-xl top-1/3 left-4">
                  Currencies
                </p>
                <Globe
                  size={100}
                  className="absolute bottom-3 right-4 text-[#143c36]"
                  strokeWidth={0.1}
                />
              </div>

              {/* CARD 3 */}
              <div className="relative bg-[#e9f1ef] rounded-tr-[50%] 
                h-48 w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 
                overflow-hidden">
                <div className="absolute top-12 left-1/4 -translate-x-1/2 flex gap-1">
                  <Sparkle size={26} fill="#143c36" />
                  <Sparkle size={26} fill="#143c36" />
                </div>

                <p className="absolute top-[45%] right-3 translate-y-1/2 text-base md:text-lg text-[#143c36]">
                  Users Active
                </p>

                <div className="absolute bottom-10 left-7 flex items-center gap-0">
                  <img className="rounded-full h-7 w-7 md:h-8 md:w-8" src={Profile1} alt="" />
                  <img className="rounded-full h-7 w-7 md:h-8 md:w-8 -ml-2" src={Profile2} alt="" />
                  <img className="rounded-full h-7 w-7 md:h-8 md:w-8 -ml-2" src={Profile1} alt="" />
                  <button className="rounded-full text-white bg-[#1C3F3A] p-2 -ml-1">
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="relative bg-[#143c36] text-white 
                h-48 w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 
                p-4 flex flex-col font-light">
                <div className="flex items-center justify-between">
                  <p className="text-base md:text-lg lg:text-xl font-semibold">
                    $196,000
                  </p>
                  <ArrowUp size={16} />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 50"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="
                        M0,34
                        C6,18 12,42 18,28
                        C24,12 30,38 36,22
                        C42,8 48,30 54,16
                        C60,26 66,10 72,24
                        C78,14 84,28 90,12
                        C94,6 97,18 100,8
                      "
                      stroke="white"
                      strokeWidth="0.7"
                      fill="none"
                    />
                  </svg>
                </div>

                <p className="absolute bottom-3 right-3 text-base md:text-lg">
                  Savings
                </p>
              </div>

            </div>
          </MotionWrapper>
        </div>
      </section>

      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Hero;