import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeDown, fadeLeft, fadeRight } from "../Components/motionVariants";
import FloatingHomeButton from "../Components/Homebutton";

function Insights() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-[#f7f6f2]">
      
      {/* Header */}
      <motion.div 
        className="max-w-6xl mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p 
          className="text-sm text-green-700 font-semibold mb-2"
          variants={fadeUp}
        >
          INSIGHTS
        </motion.p>

        <motion.h1 
          className="text-3xl md:text-4xl font-semibold text-[#143c36] mb-4 stroke-text"
          variants={fadeDown}
        >
          Perspectives that shape <br className="hidden md:block" /> smarter capital decisions
        </motion.h1>

        <motion.p 
          className="max-w-xl text-gray-700"
          variants={fadeLeft}
        >
          Research, market commentary, and strategic thinking
          from the Ascone investment team.
        </motion.p>
      </motion.div>

      {/* Featured Insight */}
      <motion.div 
        className="max-w-6xl mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeRight}
      >
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.06)] relative overflow-hidden">
          <p className="text-sm text-green-700 font-semibold mb-3 stroke-text">
            FEATURED
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#143c36] mb-4 max-w-2xl">
            Navigating private credit opportunities in a shifting global economy
          </h2>

          <p className="text-gray-700 max-w-2xl mb-8">
            An in-depth look at how disciplined underwriting,
            transparency, and technology are redefining
            risk-adjusted returns across private markets.
          </p>

          <button className="flex items-center gap-2 text-[#143c36] font-medium hover:text-green-700 transition">
            Read insight
            <ArrowUpRight />
          </button>
        </div>
      </motion.div>

      {/* Insights Grid */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {[{
          tag: "MARKET INSIGHT",
          title: "Why transparency is becoming a competitive advantage",
          description: "Investors are demanding clearer reporting, stronger governance, and real-time visibility.",
          iconBg: "border-gray-300",
          bg: "bg-white",
          textColor: "text-gray-700",
          buttonBg: "hover:bg-green-700 hover:text-white"
        },{
          tag: "STRATEGY",
          title: "Building resilient portfolios in uncertain cycles",
          description: "How diversification and disciplined risk frameworks help preserve capital during volatility.",
          iconBg: "border-gray-300",
          bg: "bg-white",
          textColor: "text-gray-700",
          buttonBg: "hover:bg-green-700 hover:text-white"
        },{
          tag: "RESEARCH",
          title: "Technology’s role in modern private credit",
          description: "From underwriting to monitoring, technology is reshaping operational efficiency.",
          iconBg: "",
          bg: "bg-[#ebe8d8]",
          textColor: "text-gray-800",
          buttonBg: "bg-[#143c36] hover:bg-green-700 text-white"
        }].map((item, index) => (
          <motion.div
            key={index}
            className={`relative ${item.bg} rounded-xl p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.05)]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={[fadeUp, fadeDown, fadeLeft][index % 3]}
            transition={{ delay: index * 0.2 }}
          >
            <div>
              <p className={`text-xs mb-2 font-medium ${item.tag === "RESEARCH" ? "text-[#143c36]" : "text-gray-500"}`}>
                {item.tag}
              </p>
              <h3 className="text-lg font-semibold text-[#143c36] mb-3">
                {item.title}
              </h3>
              <p className={`${item.textColor} text-sm`}>
                {item.description}
              </p>
            </div>

            <button className={`mt-6 self-end h-10 w-10 rounded-full flex items-center justify-center border ${item.iconBg} ${item.buttonBg} transition`}>
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>
      <FloatingHomeButton/>
    </section>
  );
}

export default Insights;

