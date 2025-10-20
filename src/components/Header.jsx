import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/styles/_layout.scss";

function Header() {
  const [active, setActive] = useState("#hero");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "#hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = "#" + section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isClickInsideHeader = e.target.closest(".header");
      const isClickOnToggle = e.target.closest(".header-toggle");
      if (!isClickInsideHeader && !isClickOnToggle && showMenu) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  const navItems = [
    { href: "#hero", label: "Home", icon: "bi-house" },
    { href: "#about", label: "About", icon: "bi-person" },
    { href: "#resume", label: "Resume", icon: "bi-briefcase" },
    { href: "#portfolio", label: "Portfolio", icon: "bi-grid" },
    { href: "#contact", label: "Contact", icon: "bi-envelope" },
  ];

  return (
    <>
      <i
        className="bi bi-list header-toggle d-xl-none"
        onClick={() => setShowMenu((prev) => !prev)}
      ></i>

      <header
        id="header"
        className={`header d-flex flex-column justify-content-center ${
          showMenu ? "header-show" : ""
        }`}
      >
        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map(({ href, icon, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setActive(href)}
                  className={`nav-link scrollto ${
                    active === href ? "active" : ""
                  }`}
                >
                  <i className={`bi ${icon}`}></i>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
