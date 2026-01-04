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

        {/* Left Narrative */}
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
            to manage capital with precision, applying robust risk frameworks
            and technology-enabled processes to unlock sustainable returns.
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
            with long-term value creation. Our approach emphasizes
            transparency, disciplined underwriting, and operational excellence
            across all our investment vehicles.
          </p>
        </motion.div>

        {/* Right Narrative */}
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
            We manage a diversified group of specialized private credit brands,
            leveraging data-driven insights and efficient execution to support
            growth-focused businesses while protecting investor capital.
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
            Every decision at Ascone is anchored in responsibility. We operate
            with institutional rigor while remaining agile, ensuring our
            partners benefit from both stability and innovation.
          </p>
        </motion.div>
      </div>

      {/* Leadership Section */}
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
        <p className="text-gray-600 max-w-2xl mb-12">
          Our leadership team brings deep expertise across finance, operations,
          and strategic execution.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "/assets/Images/Profile3.jpg", title: "Chief Executive Officer", desc: "Oversees corporate strategy, capital allocation, and long-term vision.", variant: fadeInUp },
            { img: "/assets/Images/Profile1.jpeg", title: "Managing Director", desc: "Leads operational execution and portfolio performance.", variant: fadeInRight },
            { img: "/assets/Images/Profile.webp", title: "Chief Financial Officer", desc: "Ensures financial integrity, risk oversight, and compliance.", variant: fadeInDown }
          ].map((leader, idx) => (
            <motion.div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={leader.variant}
              transition={{ duration: 0.6 }}
              whileHover={scaleOnHover.hover}
            >
              <div className="h-48 rounded-xl bg-inherit mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src={leader.img}
                  alt={leader.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#143c36]">{leader.title}</h3>
              <p className="text-gray-600 mt-2">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="p-10 bg-[#0f2e29] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Partner with Ascone</h3>
            <p className="text-white/80">
              Discover how disciplined capital and strategic insight drive
              measurable impact.
            </p>
          </div>

          <Link to="/company">
            <motion.button
              className="flex items-center gap-2 bg-white text-[#143c36] px-6 py-3 rounded-full font-medium"
              whileHover={buttonHover.hover}
              whileTap={buttonHover.tap}
            >
              Learn More <ArrowUpRight />
            </motion.button>
          </Link>
        </div>
      </motion.div>

    </section>
  );
}

export default AboutUs;









