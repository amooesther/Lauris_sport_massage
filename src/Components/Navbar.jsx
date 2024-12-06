import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-primary relative">
      {/* Logo */}
      <Link to="/">
        <img className="cursor-pointer w-30 h-16" src={assets.logo} alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <ul
        className={`absolute top-full left-0 w-full bg-white text-black shadow-lg flex flex-col items-center gap-5 font-medium transition-transform duration-300 md:static md:flex-row md:bg-transparent md:text-sm md:shadow-none md:flex md:justify-center ${
          isMenuOpen ? "translate-y-0" : "-translate-y-[200%]"
        } md:translate-y-0`}
      >
        <Link to="/">
          <li className="cursor-pointer hover:text-primary">Home</li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer hover:text-primary">About</li>
        </Link>
        <Link to="/services">
          <li className="cursor-pointer hover:text-primary">Services</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer hover:text-primary">Contact</li>
        </Link>
        <Link to="/my-appointment">
          <li className="cursor-pointer hover:text-primary">My Appointments</li>
        </Link>
         {/* Sign In Button */}
      <Link to="/login">
        <button className="bg-primary text-secondary justify-center font-semibold border-none flex w-36 items-center px-6 py-2.5 rounded-md text-sm hover:scale-105 transition-all duration-300">
          Sign In
        </button>
      </Link>

      </ul>

     
      {/* Hamburger Menu Icon for Small Screens */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="text-2xl text-primary" />
        ) : (
          <FaBars className="text-2xl text-primary" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
