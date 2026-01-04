import { useLocation, useNavigate } from "react-router-dom";

function FloatingHomeButton() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      // If already on home, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on another page, navigate to home
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-700 to-[#143c36] text-white text-sm tracking-wide shadow-lg hover:shadow-xl transition">
        HOME
      </div>
    </button>
  );
}

export default FloatingHomeButton;