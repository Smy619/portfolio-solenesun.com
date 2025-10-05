import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/main.css";
import { useEffect } from "react";

function SkillsAndResume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      
      <section id="skills" className="skills section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Here are the main technologies and tools I use to build modern,
              efficient, and scalable web applications.
            </p>
          </div>

          
          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS / SCSS <i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="progress">
                <span className="skill">
                  React.js <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  WordPress <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  SEO / Performance <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id="resume" className="resume section light-background">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              My learning path and professional experience — from web
              integration to modern front-end development.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Education</h3>

              <div className="resume-item">
                <h4>Web Integrator - OpenClassrooms</h4>
                <h5>2024 - 2025</h5>
                <p>
                  <em>Online Formation, France</em>
                </p>
                <p>
                  Completed multiple projects: responsive websites, CSS
                  animations, JavaScript interfaces, and React applications.
                </p>
              </div>

              <div className="resume-item">
                <h4>React Application Developer (Bac+3)</h4>
                <h5>2025 - 2026</h5>
                <p>
                  <em>OpenClassrooms</em>
                </p>
                <p>
                  Planned next formation: mastering full-stack development, API
                  integration, and testing.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Experience</h3>

              <div className="resume-item">
                <h4>Frontend Developer - Freelance</h4>
                <h5>2024 - Present</h5>
                <p>
                  <em>Remote - France</em>
                </p>
                <ul>
                  <li>
                    Developed multiple WordPress and static websites for small
                    businesses.
                  </li>
                  <li>
                    Built restaurant & portfolio templates (MonResto, Yuzu,
                    MesResto SaaS).
                  </li>
                  <li>
                    Integrated SEO best practices and accessibility
                    optimizations.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Project-Based Developer — Training Projects</h4>
                <h5>2024 - 2025</h5>
                <p>
                  <em>OpenClassrooms</em>
                </p>
                <ul>
                  <li>
                    Project P6: Portfolio Architecte – Dynamic API + Modal
                  </li>
                  <li>Project P7: Kasa – React Router + Collapses</li>
                  <li>Project P8: SEO Optimization – Nina Carducci</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsAndResume;
