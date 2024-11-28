import React from 'react'
import Hero from '../Components/Hero'
import Supports from '../Components/Supports'
import AboutUs from '../Components/AboutUs'
import Services from '../Components/Services'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Supports/>
        <AboutUs/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Home