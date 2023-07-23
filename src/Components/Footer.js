import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a href="https://www.linkedin.com/in/srivastavapranjal/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/iampsrv" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.youtube.com/@pranjalsrivastava3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <p className>
        Developed by Pranjal Srivastava
      </p>
    </footer>
  );
};

export default Footer;
