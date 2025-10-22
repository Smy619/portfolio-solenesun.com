import "../assets/styles/_profile.scss";

function About() {
  const profileImg = "/assets/img/profile-img.jpg";

  return (
    <section id="profile" className="profile-section section-block bg-soft">
      <div className="container" data-aos="fade-up">
        <div className="block-title">
          <h2>About</h2>
          <p>
            Passionate web developer based in France. I love building clean,
            responsive, and accessible websites with attention to detail and
            modern design.
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <img
              src={profileImg}
              className="img-fluid rounded"
              alt="Profile"
            />
          </div>

          <div
            className="col-lg-8 profile-content"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2>Frontend Developer &amp; Web Integrator.</h2>
            <p className="text-secondary">
              Based in France • Building digital experiences with heart.
            </p>
            <p className="text-italic">
              Turning design ideas into fast, responsive and elegant websites.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>{" "}
                    <span>www.solensun.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>{" "}
                    <span>+33 6 01 22 84 47 </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong>{" "}
                    <span>La Roche-sur-Yon, France</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong>{" "}
                    <span>Bac+2 / Web Integration</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>{" "}
                    <span>contact@solenesun.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong>{" "}
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              I’ve been living in France for over 18 years, continuously
              learning and creating. My goal is to build websites that blend
              aesthetic beauty with strong functionality — a balance between
              logic and art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
