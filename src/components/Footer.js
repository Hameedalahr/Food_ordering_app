import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">🍴 FoodDelivery</h2>
          <p className="footer-tagline">
            Crafted by Abdul Hameed Syed with 💻, ☕, and Swiggy APIs.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/abdul-hameed-syed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Hameedalahr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FoodDelivery | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
