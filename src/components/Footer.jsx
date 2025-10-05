function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <h3>TING SUN</h3>
        <p>Building beautiful, accessible, and performant web experiences.</p>
        <div className="social-links">
          <a href="https://github.com/Smy619" className="me-3"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/tingsun85"><i className="bi bi-linkedin"></i></a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong><span>Ting Sun</span></strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
