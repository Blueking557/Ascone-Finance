import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { motion } from "framer-motion";

// Import the money image
import MoneyImg from "../assets/Images/money.webp";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Variants for scroll animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <footer className="w-full bg-white border-t border-gray-200">

        {/* CTA */}
        <motion.div
          className="px-6 md:px-12 lg:px-20 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div
            className="
              bg-[#143c36] rounded-2xl
              p-10 md:p-14
              flex flex-col md:flex-row
              gap-8 md:gap-10
              text-white
              relative
              overflow-hidden
            "
          >
            {/* Text + Button */}
            <div className="flex-1 z-10 flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Change the way you <br />
                use your <span className="italic">money</span>
              </h2>

              <p className="text-sm text-gray-200 max-w-md">
                Join over million people who choose Ascone <br />
                for fast and secure future banking.
              </p>

              <button
                onClick={openModal}
                className="
                  w-fit
                  bg-white text-[#143c36]
                  px-6 py-3 rounded-full
                  text-sm font-medium
                  hover:bg-green-300 hover:text-white
                  transition
                "
              >
                Get Started Now
              </button>
            </div>

            {/* ⭐⭐ DOUBLE STAR */}
            <div className="hidden sm:flex md:flex absolute md:bottom-44 md:right-20 flex-row gap-4 z-10
                            md:flex-row md:static mt-6 md:mt-0">
              <div className="w-24 h-24">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path d="M50 5 C55 25, 75 45, 95 50 C75 55, 55 75, 50 95 C45 75, 25 55, 5 50 C25 45, 45 25, 50 5 Z" />
                </svg>
              </div>
              <div className="w-24 h-24">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path d="M50 5 C55 25, 75 45, 95 50 C75 55, 55 75, 50 95 C45 75, 25 55, 5 50 C25 45, 45 25, 50 5 Z" />
                </svg>
              </div>
            </div>

            {/* Decorative Bottom-Right Div */}
            <div
              className="
                w-40 h-40
                mt-20
                bg-white
                rounded-tr-[40%]
                relative
                self-end
                md:absolute md:bottom-0 md:right-0
                z-0
                overflow-hidden
                flex md:block flex-col items-center md:items-end  md:mt-0
              "
            >
              <img
                src={MoneyImg}
                alt=""
                className="absolute top-[50%] object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          className="px-6 md:px-12 lg:px-20 py-14 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <p className="font-semibold text-[#143c36] mb-4">Account</p>
            <ul className="space-y-2">
              <li>Saving</li>
              <li>Joint Accounts</li>
              <li>Crypto</li>
              <li>Commodities</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#143c36] mb-4">Help</p>
            <ul className="space-y-2">
              <li>Customer Help</li>
              <li>Community</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#143c36] mb-4">Finance</p>
            <ul className="space-y-2">
              <li>Cards</li>
              <li>Linked Accounts</li>
              <li>Payments</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#143c36] mb-4">Company</p>
            <ul className="space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li>Contact</li>
              <li>Sustainability</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <Link to="/"><h3 className="text-5xl font-bold text-[#143c36] mb-4">
              Ascone
            </h3></Link>
            <p className="text-xs leading-relaxed">
              181 Bay Street<br />
              Toronto, ON M5J 2T3<br />
              Australia 2000
            </p>
            <p className="mt-4 text-xs">English (UK)</p>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-gray-200 px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between text-xs text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>© Ascone Financial Ltd 2023</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Disclosure</span>
          </div>
        </motion.div>
      </footer>

      {/* ✅ Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Footer;