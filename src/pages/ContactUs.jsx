import React from "react";
import "./ContactUs.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollTop";

const ContactUs = () => {
    return (
        <div className="contact-container">
            <motion.section
                className="contact-hero"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Contact Us</h1>
                <p>We're here to help. Reach out with any questions or feedback!</p>
            </motion.section>

            <motion.section
                className="contact-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p><FaPhone /> +92-300-1234567</p>
                    <p><FaEnvelope /> contact@lifelink.com</p>
                    <p><FaMapMarkerAlt /> LifeLink Blood Center, Karachi, Pakistan</p>
                </div>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" className="primary-btn">Send Message</button>
                </form>
            </motion.section>

            <ScrollToTop />
        </div>
    );
};

export default ContactUs;
