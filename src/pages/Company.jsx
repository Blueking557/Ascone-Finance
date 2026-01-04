import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeDown, fadeLeft, fadeRight } from "../Components/motionVariants";

// ✅ IMAGE IMPORT (VITE SAFE)
import CompanyImage from "../assets/Images/company.jpg";
import FloatingHomeButton from "../Components/Homebutton";

function Company() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 flex flex-col gap-16">

      {/* Header */}
      <div className="max-w-6xl">
        <motion.h1 
          className="text-green-700 mb-4" 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
        >
          COMPANY
        </motion.h1>

        <motion.h2 
          className="text-3xl md:text-4xl font-semibold text-[#143c36] leading-tight"
          variants={fadeDown} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="stroke-text">Built on trust.</span> <br className="hidden md:block" />
          <span className="stroke-text">Driven by disciplined capital.</span>
        </motion.h2>

        <motion.p 
          className="mt-6 max-w-2xl text-gray-600"
          variants={fadeLeft} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
        >
          Ascone is a diversified private credit platform focused on long-term value,
          transparent partnerships, and technology-enabled execution.
        </motion.p>
      </div>

      {/* Image + Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
        <motion.div 
          className="space-y-6"
          variants={fadeRight} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-[#143c36] stroke-text">
            Who we are
          </h3>
          <p className="text-gray-600">
            We manage a portfolio of specialized credit brands designed to operate
            efficiently across market cycles.
          </p>
          <p className="text-gray-600">
            Every decision we make is grounded in transparency, discipline, and alignment
            with our partners.
          </p>
        </motion.div>

        <motion.div 
          className="relative h-64 md:h-80 bg-[#ebe8d8] rounded-tr-[30%] overflow-hidden"
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={CompanyImage}
            alt="Ascone company"
            className="absolute inset-0 h-full w-full object-cover mix-blend-multiply"
          />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
        {[
          { value: "10+", label: "Years Experience" },
          { value: "5+", label: "Credit Verticals" },
          { value: "$1B+", label: "Capital Managed" },
          { value: "100%", label: "Partner Alignment" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.06)] p-6 text-center"
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2 }}
          >
            <h4 className="text-2xl font-semibold text-[#143c36]">{item.value}</h4>
            <p className="mt-2 text-sm text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#143c36] text-white p-8 rounded-lg"
        variants={fadeUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <h3 className="text-2xl font-semibold stroke-text">
            Learn more about our strategy
          </h3>
          <p className="mt-2 text-gray-200 max-w-md">
            Explore how Ascone structures capital to perform across market cycles.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-full bg-white text-[#143c36] px-6 py-3 hover:bg-gray-100 transition">
          Explore
          <ArrowUpRight />
        </button>
      </motion.div>
     <FloatingHomeButton/>
    </section>
  );
}

export default Company;
