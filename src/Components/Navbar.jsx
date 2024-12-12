import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { useUser } from '../Context/UserContext'; // Import useUser
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { user, userRole, setUser, setUserRole } = useUser(); // Get user and userRole from context
  const navigate = useNavigate(); // For redirecting
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const handleLogout = async () => {
    await signOut(auth); // Log the user out from Firebase
    setUser(null); // Clear user state
    setUserRole(null); // Clear userRole state
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-between py-4 mb-5 border-b">
      <Link to="/">
        <img className="cursor-pointer w-30 h-16" src={assets.logo} alt="Logo" />
      </Link>
      
      {/* Hamburger menu button for small screens */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          {isMenuOpen ? '×' : '☰'} {/* Show close icon when menu is open */}
        </button>
      </div>

      {/* Navigation links */}
      <ul className={`lg:flex gap-5 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-secondary hover:text-primary underline transition-all duration-300'
              : 'hover:text-secondary transition-all duration-300'
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-secondary hover:text-primary underline transition-all duration-300'
              : 'hover:text-secondary transition-all duration-300'
          }
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? 'text-secondary hover:text-primary underline transition-all duration-300'
              : 'hover:text-secondary transition-all duration-300'
          }
        >
          <li>Services</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-secondary underline hover:text-primary transition-all duration-300'
              : 'hover:text-secondary transition-all duration-300'
          }
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to="/my-appointment"
          className={({ isActive }) =>
            isActive
              ? 'text-secondary underline hover:text-primary transition-all duration-300'
              : 'hover:text-secondary transition-all duration-300'
          }
        >
          <li>My Appointments</li>
        </NavLink>

        {/* Admin Button - only visible if the user is an admin */}
        {userRole === 'admin' && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? 'text-secondary hover:text-primary underline transition-all duration-300'
                : 'hover:text-secondary transition-all duration-300'
            }
          >
            <li>Admin</li>
          </NavLink>
        )}
      </ul>

      {/* Conditional Sign In / Log Out Button */}
      {user ? (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
          Log Out
        </button>
      ) : (
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Sign In
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
