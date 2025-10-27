import "../assets/styles/_profile.scss";

function About() {
  const profileImg = "/assets/img/profile-img.jpg";

  return (
    <section id="profile" className="profile-section section-block bg-soft">
      <div className="container" data-aos="fade-up">
        <div className="block-title">
          <h2>About</h2>
          <p>
           Passionate web developer based in France, focusing on building structured, component-based websites and applications with clean architecture, responsive design and attention to detail.
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
            <h2>Développeur Front-End React • Architecture de composants • Refonte UI &amp; optimisation • Performance & accessibilité • API REST • Remote</h2>
            <p className="sous-text">Focused on structured architecture, maintainable code and modern UI systems.</p>
            
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
