import { Plus, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  // Variants for scroll animation
  const itemVariants = {
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="border-b border-gray-200 py-4"
      initial="left"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-medium text-[#143c36]">
          {question}
        </span>
        {open ? <X size={18} /> : <Plus size={18} />}
      </button>

      {open && (
        <motion.p
          className="mt-3 text-sm text-gray-600 max-w-xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
}

function FAQ() {
  // Variants for main header
  const headerVariants = {
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left */}
        <div>
          <motion.p
            className="text-xs tracking-widest text-gray-400 mb-3"
            initial="left"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="text-3xl font-semibold text-[#143c36]"
            initial="right"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently asked <br /> questions
          </motion.h2>
        </div>

        {/* Right */}
        <div className="space-y-2">
          <FAQItem
            question="How to send a bank transfer"
            answer="You can send a bank transfer directly from your Ascone account. Simply select the recipient, enter the amount, and confirm the transaction."
          />
          <FAQItem
            question="What is the scheduled payments feature?"
            answer="Scheduled payments allow you to automate recurring payments by setting dates, frequency, and amounts in advance."
          />
          <FAQItem
            question="How can I reactivate a terminated card?"
            answer="You can reactivate your card directly from the Cards section in your account settings if it is eligible."
          />
          <FAQItem
            question="How about with a refund?"
            answer="Refunds are processed back to your Ascone account once the merchant confirms the transaction reversal."
          />
          <FAQItem
            question="How can I add money to my account?"
            answer="You can add money via bank transfer, debit card, or supported third-party payment providers."
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;

