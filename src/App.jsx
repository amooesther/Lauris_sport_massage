import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import AdminDashboard from "./Pages/AdminDashboard";
import AppointmentList from "./Pages/AppointmentList";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Schedule from "./Pages/Schedule";
import Services from "./Pages/Services";
import { assets } from "./assets/assets";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./Context/UserContext"; // Import UserProvider
import PrivateRoute from "./Components/PrivateRoute"; // Import PrivateRoute
import Users from "./Pages/Users";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <UserProvider> {/* Wrap your app with UserProvider */}
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Schedule />} />

          {/* Private Routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-appointment"
            element={
              
                <AppointmentList />
              
            }
          />
        </Routes>
        <Footer />

        {/* Fixed Chat Icon */}
        <a
          href="https://wa.link/ysuhmi"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 p-2 rounded-full hover:scale-105 transition-transform"
        >
          <img className="w-20 h-15" src={assets.chats_icon} alt="Chat Icon" />
        </a>
      </UserProvider>
    </div>
  );
}

export default App;
