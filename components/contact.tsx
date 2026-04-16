import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

const Contact = () => {
  return (
    <div className="social-media">
      <h4>Follow Me</h4>
      <div className="icons">
        <a href="https://www.facebook.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/c/yourProfile" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://shripad-avhad.medium.com/" target="_blank" rel="noopener noreferrer">
          <SiMedium />
        </a>
      </div>
    </div>
  );
};

export default Contact;