import React from "react";
import "../assets/styles/_cv.scss"


// src/pages/CV.jsx

export default function CV() {
  return (
    <section id="cv" className="cv-page">

      <div className="cv-container">

        {/* LEFT SIDEBAR */}
        <aside className="cv-sidebar">
          <div className="cv-photo">
            <img src="/assets/img/profile.jpg" alt="Profile" />
          </div>

          <div className="cv-about">
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className="cv-contact">
            <ul>
              <li><i className="bi bi-telephone"></i> +123 456 789</li>
              <li><i className="bi bi-envelope"></i> hello@example.com</li>
              <li><i className="bi bi-geo-alt"></i> Paris, France</li>
            </ul>
          </div>

          <div className="cv-languages">
            <h3>Languages</h3>
            <ul>
              <li>English</li>
              <li>French</li>
              <li>Chinese</li>
            </ul>
          </div>

          <div className="cv-skills-left">
            <h3>Expertise</h3>
            <ul>
              <li>Web Development</li>
              <li>React / JS</li>
              <li>WordPress</li>
              <li>UI Design</li>
            </ul>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="cv-content">

          <header className="cv-header">
            <h1>YOUR NAME</h1>
            <h4>Front-End / React Developer</h4>
          </header>

          <section className="cv-experience">
            <h2>Experience</h2>

            <div className="cv-item">
              <h4>Company Name — Location</h4>
              <span className="cv-date">2020—2022</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="cv-item">
              <h4>Company Name — Location</h4>
              <span className="cv-date">2018—2020</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

          </section>

          <section className="cv-education">
            <h2>Education</h2>

            <div className="cv-item">
              <h4>University Name</h4>
              <span className="cv-date">2015—2018</span>
              <p>Bachelor / Master</p>
            </div>

            <div className="cv-item">
              <h4>University Name</h4>
              <span className="cv-date">2012—2015</span>
              <p>Bachelor / Master</p>
            </div>
          </section>

          <section className="cv-skill-bars">
            <h2>Skills Summary</h2>

            <div className="skill-bar">
              <p>React Projects</p>
              <div className="bar"><span style={{ width: "78%" }}></span></div>
            </div>

            <div className="skill-bar">
              <p>Project Management</p>
              <div className="bar"><span style={{ width: "81%" }}></span></div>
            </div>

          </section>

        </div>

      </div>
    </section>
  );
}
