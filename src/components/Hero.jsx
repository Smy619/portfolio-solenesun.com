import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";

function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer.", "Frontend Engineer.", "Freelancer."],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });

    AOS.init({
      duration: 1000, once: true
    })
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero d-flex align-items-center  justify-content-center">
      <img src="/assets/img/hero-bg.jpg" alt="Background" data-aos="fade-in" />

      <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
        <h2 className="mb-2">TING SUN</h2>
        <p>
          I'm a <span ref={typedElement}></span>
        </p>
        <div className="social-links mt-3">
          <a href="https://github.com/Smy619" className="me-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/tingsun85"   className="me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/TingSunDev/" className="me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="mailto:solene.s2025@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
         </div>
      </div>
    </section>
  );
}

export default Hero;