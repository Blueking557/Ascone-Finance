import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Company from "./pages/Company";
import Values from "./pages/Values";
import Features from "./pages/Features";
import About from "./pages/About";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/company" element={<Company />} />
        <Route path="/values" element={<Values />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;




