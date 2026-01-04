import { motion } from "framer-motion";

// Define animation variants
const variants = {
  up: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  down: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  left: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  upDownCycle: {
    initial: { y: 0 },
    animate: { y: [-10, 10, -10] }, // up-down
  },
  downUpCycle: {
    initial: { y: 0 },
    animate: { y: [10, -10, 10] }, // down-up
  },
};

export default function MotionWrapper({
  children,
  variant = "up",
  delay = 0,
  repeat = 0,
  whileInView,
  viewport,
}) {
  // fallback if variant doesn't exist
  const selectedVariant = variants[variant] || variants.up;

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={{ duration: 0.6, delay, repeat, repeatType: "loop" }}
      whileInView={whileInView ? selectedVariant.animate : undefined}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}




