import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Footer from "./Footer";
import "../assets/styles/_portfolio-details.scss";

function PortfolioDetails() {
  const { id } = useParams();
  const project = portfolioData.find((item) => item.id === Number(id));

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    window.scrollTo(0, 0);

    fetch("/assets/data/portfolioData.json")
    .then()
  }, [id]);

  if (!project) {
    return (
      <section className="portfolio-details section">
        <div className="container text-center">
          <h2>Project not found</h2>
          <Link to="/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio-details" className="portfolio-details section">
      <div className="container">
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">{project.title}</li>
              </ol>
            </nav>
            <h1>{project.title}</h1>
          </div>
        </div>

        {/* Details Section */}
        {project.images && project.images.length > 0 && (
          <div className="container" data-aos="fade-up">
            {/* Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 5000 }}
              speed={600}
              className="portfolio-details-slider"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`${project.title}-${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {/* Details Content */}
        <div className="row justify-content-between gy-4 mt-4">
          {/* Left Column */}
          <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <h4>Technologies Used:</h4>
              <ul className="tech-list">
                {project.tech.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>
                  {project.category}
                </li>
                <li>
                  <strong>Status</strong> {project.status}
                </li>
                <li>
                  <strong>Year:</strong>
                  {project.year}
                </li>
                {project.url && (
                  <>
                    <li>
                      <strong>Project URL</strong>{" "}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.url.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.url}
                        className="btn-visit align-self-start"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default PortfolioDetails;
