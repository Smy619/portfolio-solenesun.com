import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import SkillsAndResume from "./components/SkillsAndResume";
import Portfolio from "./components/Portfolio";
import PortfolioDetails from "./components/PortfolieDetails";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <Preloader />
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Stats />
                <SkillsAndResume />
                <Portfolio />
              </>
            }
          />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;
