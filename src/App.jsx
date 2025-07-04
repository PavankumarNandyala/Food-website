import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AvailableBanner from './components/AvailableBaner'
import Testimonail from './components/Testimonail';
import Footer from './components/Footer';
const App = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once - while scrolling down
  });
}, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <AvailableBanner/>
      <Testimonail/>
      <Footer/>
    </div>
  )
}

export default App
