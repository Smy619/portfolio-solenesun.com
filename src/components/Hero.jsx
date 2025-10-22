import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from 'aos';


import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/_hero.scss";

function Hero() {
  const typedElement = useRef(null);
  const heroImg = "/assets/img/hero-bg.jpg";

  const socialLinks = [
  { href: "https://github.com/Smy619", icon: "bi-github" },
  { href: "https://www.linkedin.com/in/tingsun85", icon: "bi-linkedin" },
  { href: "https://www.facebook.com/TingSunDev/", icon: "bi-facebook" },
  { href: "mailto:contact@solenesun.com", icon: "bi-envelope" },
];

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer.", "Front-end Engineer.", "Freelancer."],
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
    <section id="hero" className="hero">
       <img src={heroImg} alt="Background" data-aos="fade-in" />

       <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2 className="mb-2">TING SUN</h2>
          <p>
            I'm a <span ref={typedElement}></span>
          </p>
          <div className="social-links mt-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="me-3"
                rel="noopener noreferrer"
              >
                <i className={`bi ${link.icon}`}></i>
              </a>
            ))}
         </div>
        </div>
    </section>
  );
}

export default Hero;