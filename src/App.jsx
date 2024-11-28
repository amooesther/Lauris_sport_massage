import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import { assets } from "./assets/assets"

function App() {
 

  return (
    
      <div className="mx-4 sm:mx-[10%]">
        <Navbar/>
         <Home/>
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
