import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { portfolioData } from "../data/portfolioData";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "../assets/styles/_portfolio.scss";

function Portfolio() {
  useEffect(() => {
    let isotopeInstance;

    const timer = setTimeout(() => {
      const isotopeContainer = document.querySelector(".isotope-container");
      const filterButtons = document.querySelectorAll(".isotope-filters li");

      if (isotopeContainer) {
        imagesLoaded(isotopeContainer, () => {
          isotopeInstance = new Isotope(isotopeContainer, {
            itemSelector: ".isotope-item",
            layoutMode: "masonry",
          });
        });

        filterButtons.forEach((btn) => {
          btn.addEventListener("click", function () {
            document
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");

            const filterValue = this.getAttribute("data-filter");
            isotopeInstance.arrange({ filter: filterValue });
          });
        }
        );
      }
    }, 500);
     return () => clearTimeout(timer);
  }, []);

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
            {portfolioData.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category.toLowerCase()}`}
              >
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.tech.join(", ")}</p>

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
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* End Portfolio Grid */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
