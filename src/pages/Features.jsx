import {
  ShieldCheck,
  BarChart3,
  Layers,
  Cpu,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleOnHover,
  buttonHover,
} from "../Components/motionVariants";
import FloatingHomeButton from "../Components/Homebutton";

function Features() {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "Enterprise-Level Security",
      description:
        "Multi-layered protection designed to safeguard sensitive data, ensure regulatory compliance, and maintain operational integrity at all times.",
      variant: fadeInUp,
      delay: 0.2,
    },
    {
      icon: <BarChart3 />,
      title: "Advanced Analytics",
      description:
        "Real-time insights and performance tracking that enable data-driven decision-making across portfolios and credit strategies.",
      variant: fadeInDown,
      delay: 0.4,
    },
    {
      icon: <Layers />,
      title: "Modular Architecture",
      description:
        "A flexible system that adapts to your business needs, allowing seamless expansion without disrupting existing workflows.",
      variant: fadeInLeft,
      delay: 0.6,
    },
    {
      icon: <Cpu />,
      title: "Technology-Driven Operations",
      description:
        "Automation and intelligent processing reduce friction, eliminate inefficiencies, and accelerate execution across all functions.",
      variant: fadeInRight,
      delay: 0.8,
    },
    {
      icon: <Globe />,
      title: "Global Reach",
      description:
        "Infrastructure designed to support cross-border operations, international partners, and geographically diverse portfolios.",
      variant: fadeInUp,
      delay: 1,
    },
  ];

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-16 bg-white">
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInDown}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h5
          className="text-sm tracking-widest text-green-700 mb-4"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          FEATURES
        </motion.h5>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-[#143c36] leading-tight"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Built for precision, <br /> designed for scale
          </motion.h2>

          <motion.p
            className="max-w-xl text-gray-600"
            variants={fadeInRight}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ascone delivers institutional-grade infrastructure that empowers
            organizations to manage capital, risk, and growth with confidence,
            transparency, and speed.
          </motion.p>
        </div>
      </motion.div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={feature.variant}
            transition={{ duration: 0.6, delay: feature.delay }}
            whileHover={scaleOnHover.hover}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}

        {/* Highlight Card */}
        <motion.div
          className="relative bg-[#143c36] text-white p-8 rounded-xl flex flex-col justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={scaleOnHover.hover}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Designed for Institutions</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Ascone is trusted by organizations that require stability,
              transparency, and performance at scale. Every feature is built
              with institutional standards in mind.
            </p>
          </motion.div>

          <motion.button
            className="mt-8 self-start flex items-center gap-2 border border-white/40 rounded-full px-5 py-2 text-sm"
            whileHover={buttonHover.hover}
            whileTap={buttonHover.tap}
          >
            Learn more <ArrowUpRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Statement */}
      <motion.div
        className="max-w-6xl mx-auto mt-20 border-t pt-12 flex flex-col md:flex-row justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.h3
          className="text-2xl font-semibold text-[#143c36]"
          variants={fadeInLeft}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          Infrastructure that evolves with your strategy
        </motion.h3>

        <motion.p
          className="max-w-xl text-gray-600"
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          Our features are not static — they grow alongside your organization,
          supporting innovation while maintaining the discipline required for
          long-term success.
        </motion.p>
      </motion.div>
      <FloatingHomeButton/>
    </section>
  );
}

export default Features;

/* -------------------- */
/* Feature Card Component */
/* -------------------- */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition overflow-hidden">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50 text-green-700 mb-6">
        {icon}
      </div>

      <motion.h4
        className="text-lg font-semibold text-[#143c36] mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h4>

      <motion.p
        className="text-sm text-gray-600 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
    
  );
}


