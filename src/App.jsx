import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import AboutUs from "./Pages/AboutUs"
import AdminDashboard from "./Pages/AdminDashboard"
import Appointment from "./Pages/Appointment"
import AppointmentList from "./Pages/AppointmentList"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Schedule from "./Pages/Schedule"
import Services from "./Pages/Services"
import { assets } from "./assets/assets"
import { Route, Routes } from "react-router-dom"

function App() {
 

  return (
    
      <div className="mx-4 sm:mx-[10%]">
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/booking' element={<Appointment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/book' element={<Schedule/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path='/my-appointment' element={<AppointmentList/>} />
        </Routes>         
         <Footer/>
         <a
        href="https://wa.link/ysuhmi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 p-2 rounded-full hover:scale-105 transition-transform"
      >
        <img className="w-20 h-15" src={assets.chats_icon} alt="Chat Icon" />
      </a>
    </div>
  )
}

export default App
