import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/styles/_skills.scss";
import "../assets/styles/_timeline.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CV from "../pages/CV";

function SkillsAndResume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* -------- Skills Section -------- */}
      <section id="expertise" className="expertise-section section-block">
        <div className="container" data-aos="fade-up">
          <div className="block-title">
            <h2>Skills</h2>
            <p>
              Here are the main technologies and tools I use to build modern,
              efficient, and scalable web applications.
            </p>
          </div>

          <div className="row expertise-content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "100%" }}
                    aria-label="Html skill 90%"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS / SCSS <i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "95%" }}
                    aria-label="CSS skill 90%"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                    aria-label="JavaScript skill 90%"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="progress">
                <span className="skill">
                  React.js <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "85%" }}
                    aria-label="React skill 90%"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  WordPress <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                    aria-label="WordPress skill 90%"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  SEO / Performance <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "85%" }}
                    aria-label="SEO skill 90%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- Resume Section -------- */}
      <section id="timeline" className="timeline-section section-block bg-soft">
        <div className="container" data-aos="fade-up">
          <div className="block-title">
            <h2>Resume</h2>

            <Link to="/cv" className="cv">
              View CV Online
            </Link>

            <p>
              My learning path and professional experience — from web
              integration to modern front-end development.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="timeline-title">Education</h3>

              <div className="timeline-item">
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

              <div className="timeline-item">
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
              <h3 className="timeline-title">Experience</h3>

              <div className="timeline-item">
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

              <div className="timeline-item">
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
