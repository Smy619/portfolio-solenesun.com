import "../assets/styles/_layout.scss";

function Footer() {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="container">
        <h3 className="footer-title">TING SUN</h3>
        <p className="footer-text">
          Building beautiful, accessible, and performant web experiences.
        </p>

        <div className="footer-social-links">
          <a
            href="https://github.com/Smy619"
            aria-label="GitHub Profile"
            className="me-3"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tingsun85"
            aria-label="LinkedIn Profile"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/TingSunDev/"
            aria-label="LinkedIn Profile"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://x.com/SoleneDevStudio"
            aria-label="LinkedIn Profile"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()}{" "}
          <strong>
            <span>Ting Sun</span>
          </strong>{" "}
         Rebuilt From Open-source Inspiration.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
