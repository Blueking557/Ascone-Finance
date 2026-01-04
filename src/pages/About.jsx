import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleOnHover,
  buttonHover
} from "../Components/motionVariants";

// ✅ IMAGE IMPORTS (VITE SAFE)
import ProfileCEO from "../assets/Images/Profile3.jpg";
import ProfileMD from "../assets/Images/Profile1.jpeg";
import ProfileCFO from "../assets/Images/Profile.webp";
import FloatingHomeButton from "../Components/Homebutton";

function AboutUs() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-20 bg-[#f8f7f3] overflow-hidden">

      {/* Gradient Header */}
      <motion.div
        className="max-w-7xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInDown}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-700 to-[#143c36] text-white text-sm tracking-wide mb-6">
          ABOUT ASCONE
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#143c36] leading-tight max-w-4xl">
          Building long-term value through disciplined capital, transparency,
          and technology-driven execution
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Ascone is a modern investment and credit-focused firm built on clarity,
          accountability, and intelligent deployment of capital across
          high-quality opportunities.
        </p>
      </motion.div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">

        <motion.div
          className="p-8 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#143c36] mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Ascone operates at the intersection of private credit, structured
            investments, and financial innovation. Our platform is designed
            to manage capital with precision.
          </p>
        </motion.div>

        <motion.div
          className="p-8 rounded-2xl bg-[#0f2e29] text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
          <p className="leading-relaxed text-white/90">
            We believe capital should be intentional, measurable, and aligned
            with long-term value creation.
          </p>
        </motion.div>

        <motion.div
          className="p-8 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#143c36] mb-4">What We Do</h2>
          <p className="text-gray-600 leading-relaxed">
            We manage a diversified group of specialized private credit brands.
          </p>
        </motion.div>

        <motion.div
          className="p-8 rounded-2xl bg-[#ebe8d8] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInDown}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-[#143c36] mb-4">Our Commitment</h2>
          <p className="text-gray-700 leading-relaxed">
            Every decision at Ascone is anchored in responsibility.
          </p>
        </motion.div>
      </div>

      {/* Leadership */}
      <motion.div
        className="max-w-7xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#143c36] mb-4">
          Leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: ProfileCEO, title: "Chief Executive Officer", desc: "Oversees corporate strategy and capital allocation." },
            { img: ProfileMD, title: "Managing Director", desc: "Leads operational execution and performance." },
            { img: ProfileCFO, title: "Chief Financial Officer", desc: "Ensures financial integrity and risk oversight." }
          ].map((leader, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              whileHover={scaleOnHover.hover}
            >
              <div className="h-48 mb-6">
                <img
                  src={leader.img}
                  alt={leader.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#143c36]">{leader.title}</h3>
              <p className="text-gray-600 mt-2">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="max-w-7xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
      >
        <div className="p-10 bg-[#0f2e29] text-white flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-2xl font-semibold">Partner with Ascone</h3>
          <Link to="/company">
            <motion.button
              className="bg-white text-[#143c36] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-400 hover:text-white transition group"
              whileHover={buttonHover.hover}
              whileTap={buttonHover.tap}
            >
              <span>Learn More</span>
              <ArrowUpRight  size={20} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
     <FloatingHomeButton/>
    </section>
  );
}

export default AboutUs;
