import { assets } from "../assets/assets";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-primary">
      {/* Logo */}
      <img className="cursor-pointer w-30 h-16" src={assets.logo} alt="Logo" />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li
          className="hover:text-primary cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Home
        </li>
        <li
          className="hover:text-primary cursor-pointer"
          onClick={() => handleScroll("about")}
        >
          About
        </li>
        <li
          className="hover:text-primary cursor-pointer"
          onClick={() => handleScroll("services")}
        >
          Services
        </li>
        <li
          className="hover:text-primary cursor-pointer"
          onClick={() => handleScroll("contact")}
        >
          Contact
        </li>
      </ul>

      {/* Button */}
      <button className="bg-primary text-white font-semibold border-none flex w-48 items-center px-6 py-2.5 rounded-md text-center text-sm hover:scale-105 transition-all duration-300">
        Book Appointment
      </button>
    </div>
  );
};

export default Navbar;
