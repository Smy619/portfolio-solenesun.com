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

import imgA from "../assets/img/portfolio/app-1.jpg";
import imgB from "../assets/img/portfolio/product-1.jpg";
import imgC from "../assets/img/portfolio/books-1.jpg";
import imgD from "../assets/img/portfolio/branding-1.jpg";
import imgE from "../assets/img/testimonials/testimonials-2.jpg";


function PortfolioDetails() {
  const { id } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
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
                <li className="current">Portfolio Details #{id}</li>
              </ol>
            </nav>
            <h1>Portfolio Details</h1>
          </div>
        </div>
        
        {/* Details Section */}
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
          {[imgA, imgB, imgC, imgD, imgE].map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`slide-${index}`} />
           </SwiperSlide>
          ))}
          </Swiper>
        </div>
      
       <div className="row justify-content-between gy-4 mt-4">
        {/* Left Column */}
            <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              <h2>This is an example of portfolio details</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
              <p>
                Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
              </p>
              
              {/* Testimonial Item */}
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <div>
                  <img src={imgE} className="testimonial-img" alt="testimonial"/>
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>

              <p>
                Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
              </p>

              <p>
                Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
              </p>

            </div>
          </div>
          {/* Right Column */}
         <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong> Web design</li>
                <li><strong>Client</strong> ASU Company</li>
                <li><strong>Project date</strong> 01 March, 2020</li>
                <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
                <li><a href="#" className="btn-visit align-self-start">Visit Website
                   </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   </section>
  );
}

export default PortfolioDetails;