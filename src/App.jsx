import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Schedule from "./Pages/Schedule";
import Services from "./Pages/Services";
import { assets } from "./assets/assets";
import { Route, Routes } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-soft-neutral pt-[70px] md:pt-[96px] text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Schedule />} />
        </Routes>
      </main>
      <Footer />

      {/* Fixed WhatsApp Chat Icon */}
      <a
        href="https://wa.link/ysuhmi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;
