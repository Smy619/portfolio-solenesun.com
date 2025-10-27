import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import CV from "./pages/CV";
import StudioDetails from "./pages/StudioDetails";
import PortfolioDetails from "./pages/PortfolioDetails";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
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
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/studio-Details" element={<StudioDetails />} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;
