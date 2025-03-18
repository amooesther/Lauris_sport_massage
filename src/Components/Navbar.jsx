import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../Context/UserContext"; // Import useUser
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { user, userRole, setUser, setUserRole } = useUser(); // Get user and userRole from context
  const navigate = useNavigate(); // For redirecting
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const handleLogout = async () => {
    await signOut(auth); // Log the user out from Firebase
    setUser(null); // Clear user state
    setUserRole(null); // Clear userRole state
    navigate("/login"); // Redirect to login page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    if (window.innerWidth < 768) setIsMenuOpen(false); // Close the menu only on mobile
  };

  return (
    <div className="flex items-center justify-between py-4 mb-5 border-b relative">
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img className="cursor-pointer w-35 h-20" src={assets.logo} alt="Logo" />
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="block md:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"} {/* Change icon based on menu state */}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute top-full left-0 w-full bg-white text-black shadow-lg flex flex-col items-center gap-5 font-medium transition-transform duration-300 md:static md:flex-row md:bg-transparent md:shadow-none md:flex md:justify-center ${
          isMenuOpen ? "translate-y-0" : "-translate-y-[200%]"
        } md:translate-y-0`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-secondary hover:text-primary transition-all duration-300"
              : "hover:text-secondary transition-all duration-300"
          }
          onClick={closeMenu}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-secondary hover:text-primary transition-all duration-300"
              : "hover:text-secondary transition-all duration-300"
          }
          onClick={closeMenu}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-secondary hover:text-primary transition-all duration-300"
              : "hover:text-secondary transition-all duration-300"
          }
          onClick={closeMenu}
        >
          <li>Services</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-secondary hover:text-primary transition-all duration-300"
              : "hover:text-secondary transition-all duration-300"
          }
          onClick={closeMenu}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to="/my-appointment"
          className={({ isActive }) =>
            isActive
              ? "text-secondary hover:text-primary transition-all duration-300"
              : "hover:text-secondary transition-all duration-300"
          }
          onClick={closeMenu}
        >
          <li>My Appointments</li>
        </NavLink>

        {/* Admin Button - only visible if the user is an admin */}
        {userRole === "admin" && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "text-secondary hover:text-primary transition-all duration-300"
                : "hover:text-secondary transition-all duration-300"
            }
            onClick={closeMenu}
          >
            <li>Admin</li>
          </NavLink>
        )}

        {/* Conditional Sign In / Log Out Button */}
        <li>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 w-28 text-white px-4 py-2 rounded-md md:block"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-primary w-28 border-none outline-0 hover:bg-secondary text-white px-4 py-2 rounded-md md:block">
                Sign In
              </button>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
