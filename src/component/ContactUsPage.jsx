import React from "react";
import "../assets/css/ContactUsPage.css";
import Navbar from "./Navbar";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h2 >Contact Us</h2>
        <div className="contact-form">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={() => {
              alert("Message sent successfully!");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
