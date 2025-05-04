import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import mainimg from '../components/images/mainimg.jpg';
import sideimg from '../components/images/sideimg.jpg'
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollTop';

const driveCards = [
  {
    icon: 'fas fa-users',
    title: 'Community Center Drive',
    type: 'Local',
    description: 'Join us at the community center on October 26th to donate blood and support local patients.',
  },
  {
    icon: 'fas fa-hospital',
    title: 'Hospital Partnership',
    type: 'Medical',
    description: 'Partnering with City Hospital on November 15th for a large-scale blood donation event.',
  },
  {
    icon: 'fas fa-building',
    title: 'Corporate Drive',
    type: 'Corporate',
    description: 'Hosting a blood drive at Tech Solutions Corp. on December 8th to engage employees in life-saving efforts.',
  },
  {
    icon: 'fas fa-university',
    title: 'University Campaign',
    type: 'Education',
    description: 'Launching a blood donation campaign at State University in January to encourage student participation.',
  },
];

const Home = () => (
  <div className="donate-section">
    <motion.div
      className="gradient-card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="card-title">Give the Gift of Life: Donate Blood</h2>
      <p className="card-description">
        Your blood donation can make a life-saving difference. Join LifeLink in supporting our community's blood needs.
      </p>
      <div className="cta-buttons">

      </div>
      <div className="card-buttons">
        <button className="card-button">
          <i className="fas fa-map-marker-alt"></i> Find a Drive
        </button>
        <button className="card-button">
          <i className="fas fa-info-circle"></i> Learn More
        </button>
      </div>
      <div className="donate-image-container">
        <img src={mainimg} alt="Blood donation awareness" className="donate-image" />
      </div>
    </motion.div>

    {/* Info Cards Section */}
    <div className="info-and-image-container">
      <motion.div
        className="info-cards-container"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="info-card">
          <h3 className="info-card-title">
            <i className="fas fa-question-circle"></i> Why Donate Blood?
          </h3>
          <p className="info-card-description">
            Discover the profound impact of your blood donation on recipients and the rewarding benefits for donors.
          </p>
        </div>
        <div className="info-card">
          <h3 className="info-card-title">
            <i className="fas fa-heart"></i> Save Lives
          </h3>
          <p className="info-card-description">
            Each donation can save up to three lives, providing critical support for patients in need.
          </p>
        </div>
        <div className="info-card">
          <h3 className="info-card-title">
            <i className="fas fa-hands-helping"></i> Community Support
          </h3>
          <p className="info-card-description">
            Contribute to the well-being of your community by ensuring a stable blood supply for local hospitals.
          </p>
        </div>
        <div className="info-card">
          <h3 className="info-card-title">
            <i className="fas fa-heartbeat"></i> Personal Benefits
          </h3>
          <p className="info-card-description">
            Regular donations can provide health benefits, including a free mini-physical and reduced risk of certain diseases.
          </p>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="side-image-container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={sideimg} alt="Blood donation awareness side" className="side-image" />
      </motion.div>
    </div>

    {/* Upcoming Drives Section */}
    <motion.div
      className="upcoming-drives-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="upcoming-drives-title">Upcoming Drives</h2>
      <p className="upcoming-drives-description">
        Find a blood drive near you and help save lives. Check out our scheduled events and locations.
      </p>

      <div className="upcoming-drives-list">
        {driveCards.map((drive, index) => (
          <motion.div
            key={index}
            className="upcoming-drive-card"
            whileHover={{ x: 10, y: -10, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <i className={drive.icon}></i>
            <h3>{drive.title}</h3>
            <p>{drive.type}</p>
            <p>{drive.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
    <div style={{ marginTop: '3rem' }} className="footer-container">
      <Footer />
    </div>
    <ScrollToTop />
  </div>
);

export default Home;
