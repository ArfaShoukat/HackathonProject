import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import footerImg from './images/footerimg.jpeg';

const Footer = () => {
  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >


      <div className="footer-content">
        <div className="footer-image">
          <img src={footerImg} alt="Footer visual" />
        </div>

        <div className="footer-info">
          <h2>Blood Recipient</h2>
          <p>
            Ready to Save a Life? Join our community of lifesavers. Sign up to donate blood and make a significant impact on those in need.
          </p>

          <div className="footer-grid">
            <div className="footer-block">
              <h4><i className="fas fa-clock"></i> Office Hours</h4>
              <p>Monday - Friday</p>
              <p>9:00 am to 5:00 pm</p>
            </div>
            <div className="footer-block">
              <h4><i className="fas fa-map-marker-alt"></i> Our Address</h4>
              <p>123 Main Street, Cityville, State 12345</p>
              <p>Regional Office: 456 Oak Avenue, Townburg</p>
            </div>
            <div className="footer-block">
              <h4><i className="fas fa-phone-alt"></i> Get In Touch</h4>
              <p>(+92)-867-678-6789</p>
              <p>info@lifelink.org</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#"><i className="fas fa-info-circle"></i> About Blood Donation</a>
            <a href="#"><i className="fas fa-calendar-alt"></i> Upcoming Drives</a>
            <a href="#"><i className="fas fa-user-md"></i> Donor Information</a>
            <a href="#"><i className="fas fa-envelope"></i> Contact Us</a>
          </div>

          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>

          <p className="footer-bottom">© LifeLink 2024. Donate Blood, Save Lives.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
