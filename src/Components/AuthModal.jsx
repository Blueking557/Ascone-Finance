import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login"); // "login" or "signup"

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                ✕
              </button>

              {/* Tab Toggle */}
              <div className="flex mb-6 border-b border-gray-200">
                <button
                  className={`flex-1 py-2 text-center font-medium ${
                    activeTab === "login"
                      ? "border-b-2 border-green-700 text-green-700"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 text-center font-medium ${
                    activeTab === "signup"
                      ? "border-b-2 border-green-700 text-green-700"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("signup")}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              {activeTab === "login" ? (
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="space-y-4"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition"
                  >
                    Login
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition"
                  >
                    Sign Up
                  </button>
                </motion.form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
