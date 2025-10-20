import React, { useEffect, useState } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "../assets/styles/_portfolio.scss";

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);

  // Fetch portfolio data from external JSON file
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Smy619/projet-12-portfolio/refs/heads/main/src/data/portfolioData.json"
    )
      .then((response) => response.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.error("Error fetching portfolio data:", error));
  }, []);

  // Initialize GLightbox one time
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  // Initialize Isotope and filtering
  useEffect(() => {
    if (!portfolioData.length) return; // Wait until portfolio data is loaded

    let isotopeInstance;
    const isotopeContainer = document.querySelector(".isotope-container");
    const filterButtons = document.querySelectorAll(".portfolio-filters li");

    imagesLoaded(isotopeContainer, () => {
      isotopeInstance = new Isotope(isotopeContainer, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
      });
      isotopeInstance.arrange({ transitionDuration: "0.4s" });
    });
    // Filter button click
    const handleFilterClick = function (event) {
      document
        .querySelector(".portfolio-filters .filter-active")
        ?.classList.remove("filter-active");

      const target = event.currentTarget;
      target.classList.add("filter-active");

      const filterValue = target.getAttribute("data-filter");
      isotopeInstance.arrange({ filter: filterValue });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", handleFilterClick);
    });

    return () => {
      filterButtons.forEach((button) => {
        button.removeEventListener("click", handleFilterClick);
      });
      if (isotopeInstance) isotopeInstance.destroy();
    };
  }, [portfolioData]);

  // Render Portfolio Section
  return (
    // Portfolio Section
    <section id="portfolio" className="portfolio section">
      {/*Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-formation">Formation</li>
            <li data-filter=".filter-personal">Personal</li>
            <li data-filter=".filter-concept">Concept</li>
          </ul>

          {/* -------------------- Portfolio Grid ----------------- */}
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioData.length === 0 ? (
              <p className="text-center text-muted">Loading portfolio...</p>
            ) : (
              portfolioData.map((item) => (
                <div
                  key={item.id}
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category.toLowerCase()}`}
                >
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>
                      {Array.isArray(item.tech)
                        ? item.tech.join(", ")
                        : item.tech}
                    </p>

                    <span
                      className={`badge ${
                        item.status === "Completed"
                          ? "bg-success"
                          : item.status === "In Progress"
                          ? "bg-warning"
                          : "bg-secondary"
                      }`}
                    >
                      {item.status}
                    </span>

                    {/* Lightbox Zoom */}
                    <a
                      href={item.image}
                      title={item.title}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>

                    {/* Details Link */}
                    <a
                      href={`/portfolio-details/${item.id}`}
                      className="details-link"
                      title="More Details"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* End Portfolio Grid */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
