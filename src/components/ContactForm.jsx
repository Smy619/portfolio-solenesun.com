import React from "react";
import "../assets/styles/_contact-form.scss"

function ContactForm() {
  return (
    <form
      action="forms/contact.php"
      method="post"
      className="contact-form"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="contact-form__input form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="contact-form__input form-control"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            name="subject"
            className="contact-form__input form-control"
            placeholder="Subject"
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            name="message"
            rows="6"
            className="contact-form__textarea form-control"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <div className="col-md-12 text-center">
          <div className="contact-form__loading">Loading</div>
          <div className="contact-form__error-message"></div>
          <div className="contact-form__sent-message">Your message has been sent. Thank you!</div>

          <button type="submit" className="contact-form__button">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}


export default ContactForm;