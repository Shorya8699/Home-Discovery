import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import PropertyCategories from './components/PropertyCategories'
import CitiesSection from './components/CitiesSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on reload
  }, []); 
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-fixed');
      } else {
        navbar.classList.remove('navbar-fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-secondary-50">
      <Header />
      <main>
        <Hero />
        <About />
        <PropertyCategories />
        <CitiesSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App