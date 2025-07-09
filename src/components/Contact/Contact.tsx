import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <a
        href="https://www.linkedin.com/in/burak-telli-840468280/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img
          src="/assets/images/Contact/Linkedin.png"
          alt="LinkedIn"
          className="contact-icon"
        />
      </a>
      <a
        href="https://github.com/BurakTeli"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img
          src="/assets/images/Contact/github.jpeg"
          alt="GitHub"
          className="contact-icon"
        />
      </a>
      <a href="mailto:tellibrk216@gmail.com" aria-label="Email">
        <img
          src="/assets/images/Contact/mail.webp"
          alt="Email"
          className="contact-icon"
        />
      </a>
    </section>
  );
};

export default Contact;
