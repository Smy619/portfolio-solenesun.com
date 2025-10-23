import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/_studio.scss";

function Studio() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //During local dev -> from public folder
    //During deployement -> from Github raw

    const baseUrl =
      import.meta.env.MODE === "development"
        ? "/assets/data/studioServices.json"
        : "https://raw.githubusercontent.com/Smy619/projet-12-portfolio/main/public/assets/data/studioServices.json";

    fetch(`${baseUrl}?t=${Date.now()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Network error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching studio services:", err);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading services...</p>;

  return (
    <section id="studio" className="studio section">
      <div className="container block-title" data-aos="fade-up">
        <h2>Solene Dev Studio</h2>
        <p className="subtitle">
          Bulding digital experiences with clarity, creativity, and code.
        </p>

        <div className="text-center mt-5">
          <Link to="/studio-details" className="btn btn-outline-primary">
            Discover Full Studio →
          </Link>
        </div>

        <div className="row gy-4 mt-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="service-box"
                data-aos="zoom-in"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Studio;
