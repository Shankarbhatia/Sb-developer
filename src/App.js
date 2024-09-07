import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import ConsultationBanner from './Components/ConsultationBanner'
import Skills from './Components/Skills'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'
// import AnimateMovingCursor from './Components/AnimateMovingCursor'

function App() {
  return (
    <div >
      {/* <AnimateMovingCursor /> */}
      <Navbar />
      <HeroSection/>
      <About />
      <ConsultationBanner />
      <Skills />    
      <ConsultationBanner />
      <ContactSection />
      <Footer />

    </div>
  )
}

export default App