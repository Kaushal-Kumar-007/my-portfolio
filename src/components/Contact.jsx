import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kaushal-kumar-7217a6351/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Kaushal-Kumar-007" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:kaushalkr25122004@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/916204723528" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
