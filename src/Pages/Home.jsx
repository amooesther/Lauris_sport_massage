import React from 'react'
import Hero from '../Components/Hero'
import Supports from '../Components/Supports'
import Service from '../Components/Service'
import Contact from './Contact'
import Choose from '../Components/Choose'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Supports/>
        <Choose/>
        <Service/>
       
    </div>
  )
}

export default Home