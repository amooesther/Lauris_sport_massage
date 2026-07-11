import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to trigger sticky background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-premium py-2 border-b border-gray-100"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img
            className={`w-auto h-16 md:h-24 transition-all duration-300 hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${
              isScrolled ? "brightness-95 contrast-110" : "brightness-105 contrast-105"
            }`}
            src={assets.logo}
            alt="LauraPhys Logo"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-medium text-[15px] tracking-wide">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative py-2 text-navy-dark transition-colors duration-300 hover:text-secondary ${
                      isActive ? "text-secondary font-semibold" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/book">
            <button className="bg-accent-gold hover:bg-amber-600 text-white font-bold py-2.5 px-5 rounded-lg shadow-teal-glow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/book">
            <button className="bg-accent-gold text-white font-bold py-1.5 px-3.5 rounded-md text-xs shadow-md">
              Book Now
            </button>
          </Link>
          <button
            className="text-navy-dark focus:outline-none text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`absolute top-full left-0 w-full h-[calc(100vh-100%)] bg-white z-50 flex flex-col justify-between border-t border-gray-100 transition-all duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 overflow-y-auto">
          <nav className="flex flex-col gap-5 text-lg font-semibold text-navy-dark">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `py-2 transition-colors duration-300 ${
                    isActive ? "text-secondary pl-2 border-l-4 border-secondary" : "hover:text-secondary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <Link to="/book" onClick={closeMenu}>
            <button className="w-full bg-accent-gold hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-300 text-center">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
