import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact.jsx/Contact'
import Footer from './components/Footer/Footer'
import ScrollButtons from "./components/ScrollButtons/ScrollButtons";

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
        <ScrollButtons />
    </div>
  )
}

export default App