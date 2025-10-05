import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SkillsAndResume from "./components/SkillsAndResume"
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, once: true
    })
  }, [])
  return (
    <>
     <Header />
      <main className="main">
        <Hero />
        <About/>
        <SkillsAndResume />
      </main>
      <Footer />
    </>
  )
}

export default App
