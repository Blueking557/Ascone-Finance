import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on Home click if already on home, else navigate
  const handleHomeClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false); // close mobile menu
  };

  // Close mobile menu on link click
  const handleLinkClick = () => setOpen(false);

  // Utility to highlight active link
  const isActive = (path) => pathname === path ? "text-green-700 font-semibold" : "";

  return (
    <>
      <nav className="w-full bg-white px-6 md:px-10 py-3 relative shadow-sm">
        <div className="flex items-center justify-between">
          {/* LEFT: Logo + Links */}
          <div className="flex items-center gap-10">
            <h1 className="text-[#1d4842] text-2xl font-bold">Ascone</h1>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-6 mx-6 text-gray-700 font-medium">
              <li>
                <Link to="/" onClick={handleHomeClick} className={isActive("/")}>Home</Link>
              </li>
              <li>
                <Link to="/features" onClick={handleLinkClick} className={isActive("/features")}>Features</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className={isActive("/about")}>About Us</Link>
              </li>
              <li>
                <Link to="/company" onClick={handleLinkClick} className={isActive("/company")}>Company</Link>
              </li>
              <li>
                <Link to="/insights" onClick={handleLinkClick} className={isActive("/insights")}>Insights</Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: Auth + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setModalOpen(true)}
                className="text-lg text-gray-700"
              >
                Login
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-full text-white px-5 py-2 bg-[#1C3F3A] hover:bg-[#42a195] transition"
              >
                Sign Up
              </button>
            </div>

            {/* Hamburger (Mobile) */}
            <button
              className="md:hidden text-[#1d4842]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-6 bg-white shadow-md rounded-xl p-6">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              <li>
                <Link to="/" onClick={handleHomeClick} className={isActive("/")}>Home</Link>
              </li>
              <li>
                <Link to="/features" onClick={handleLinkClick} className={isActive("/features")}>Features</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className={isActive("/about")}>About Us</Link>
              </li>
              <li>
                <Link to="/company" onClick={handleLinkClick} className={isActive("/company")}>Company</Link>
              </li>
              <li>
                <Link to="/insights" onClick={handleLinkClick} className={isActive("/insights")}>Insights</Link>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <button 
                onClick={() => { setModalOpen(true); handleLinkClick(); }}
                className="text-lg text-gray-700"
              >
                Login
              </button>
              <button
                onClick={() => { setModalOpen(true); handleLinkClick(); }}
                className="rounded-full text-white py-2 bg-[#1C3F3A] hover:bg-[#42a195] transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
