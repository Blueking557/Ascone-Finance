import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AuthModal from "./AuthModal";
import { useState } from "react";

// Import images from assets/Images folder
import RingImg from "../assets/Images/ring.jpg";
import OIPImg from "../assets/Images/OIP.webp";

function Values() {
  const [isModalOpen, setModalOpen] = useState(false);

  const fadeVariants = {
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <section className="p-6 m-4 md:m-10 flex flex-col">
      
      {/* Title */}
      <h1 className="mb-6 text-green-700">VALUES</h1>

      {/* Heading + text */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl mb-10">
        <motion.h1
          className="text-3xl font-semibold text-[#143c36]"
          initial="left"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeVariants}
          transition={{ duration: 0.6 }}
        >
          Make your <br /> spend, well spent
        </motion.h1>
        <motion.p
          className="md:text-right mt-4 md:mt-0"
          initial="right"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Manages a diversified group of specialized private credit <br />
          brands with efficient tech-enabled processes
        </motion.p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-2 w-full max-w-6xl">
        
        {/* First Card */}
        <div className="bg-white border p-4 border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.08)] h-64 md:h-96 w-full relative overflow-hidden">
          <img
            src={RingImg}
            alt="diamond"
            className="h-20 w-20 md:h-24 md:w-24 object-contain absolute top-4 left-6 md:left-10 mix-blend-multiply"
          />

          <motion.div
            className="absolute top-[30%] m-4 p-5 space-y-3"
            initial="up"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeVariants}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="font-bold text-xl text-[#143c36]"
              initial="left"
              whileInView="visible"
              variants={fadeVariants}
              transition={{ duration: 0.6 }}
            >
              Transparency
            </motion.h1>
            <motion.p
              initial="right"
              whileInView="visible"
              variants={fadeVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A departure from the industry norm of <br />
              ambiguity, Montlost as a public <br />
              and finest company
            </motion.p>
          </motion.div>

          <button
            className="rounded-full border-2 hover:text-white absolute bottom-4 right-4 md:left-4 md:right-auto p-2 hover:bg-[#143c36] border-gray-200 h-12 w-12 transition"
            onClick={() => setModalOpen(true)}
          >
            <ArrowUpRight />
          </button>
        </div>

        {/* Second Card */}
        <div className="bg-white border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.08)] h-64 md:h-96 w-full relative overflow-hidden">
          <img
            src={OIPImg}
            alt="diamond"
            className="h-24 w-24 md:h-32 md:w-32 object-contain absolute top-4 left-6 md:left-10"
          />

          <motion.div
            className="absolute top-[30%] m-4 p-5 space-y-3"
            initial="up"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeVariants}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="font-bold text-xl text-[#143c36]"
              initial="right"
              whileInView="visible"
              variants={fadeVariants}
              transition={{ duration: 0.6 }}
            >
              Creativity expansion
            </motion.h1>
            <motion.p
              initial="left"
              whileInView="visible"
              variants={fadeVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ascone propriatory fintech<br />
              platform helps our subsidiaries <br />
              locate and manage investments
            </motion.p>
          </motion.div>

          <button
            className="rounded-full border-2 hover:text-white absolute bottom-4 right-4 md:left-4 md:right-auto p-2 hover:bg-[#143c36] border-gray-200 h-12 w-12 transition"
            onClick={() => setModalOpen(true)}
          >
            <ArrowUpRight />
          </button>
        </div>

        {/* Third Card */}
        <div className="bg-[#ebe8d8] rounded-tr-[30%] h-64 md:h-96 w-full relative overflow-hidden">
          <img
            src={RingImg}
            alt="diamond"
            className="h-10 w-10 md:h-32 md:w-32 object-contain absolute top-4 left-6 md:left-10 mix-blend-multiply"
          />

          <motion.div
            className="absolute top-[30%] m-4 p-5 space-y-3"
            initial="up"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeVariants}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="font-bold text-xl text-[#143c36]"
              initial="left"
              whileInView="visible"
              variants={fadeVariants}
              transition={{ duration: 0.6 }}
            >
              Private Credits Investments
            </motion.h1>
            <motion.p
              initial="right"
              whileInView="visible"
              variants={fadeVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We provide access to unique private <br />
              investments, a rare but a valuable part of a sound<br />
              investment portfolio
            </motion.p>
          </motion.div>

          <button
            className="text-white rounded-full absolute bottom-4 right-4 md:left-4 md:right-auto p-2 bg-[#143c36] hover:bg-green-600 border-2 h-12 w-12 transition"
            onClick={() => setModalOpen(true)}
          >
            <ArrowUpRight />
          </button>
        </div>

      </div>

      {/* CTA Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

export default Values;