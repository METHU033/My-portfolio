import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollButtons from "./components/ScrollButtons/ScrollButtons";
import Loader from "./components/Loader/Loader";

const App = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, images)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);
  return(
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <MyWork />
          <Contact />
          <Footer />
          <ScrollButtons />
        </>
      )}
    </div>
  );
}


export default App