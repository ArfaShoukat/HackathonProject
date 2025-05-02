import React from 'react';
import './DonateCard.css';
import img1 from './images/img1.jpg'; 
import sideimg from './images/sideimg.jpg';
const DonateCard = () => (
  <div className="donate-section">
    <div className="gradient-card">
      <h2 className="card-title">Give the Gift of Life: Donate Blood</h2>
      <p className="card-description">
        Your blood donation can make a life-saving difference. Join LifeLink in supporting our community's blood needs.
      </p>
      <div className="card-buttons">
        <button className="card-button">
          <i className="fas fa-map-marker-alt"></i> Find a Drive
        </button>
        <button className="card-button">
          <i className="fas fa-info-circle"></i> Learn More
        </button>
      </div>
      <div className="donate-image-container">
        <img
          src={img1}
          alt="Blood donation awareness"
          className="donate-image"
        />
      </div>
    </div>

    {/* Info Cards with Icons */}
    <div className="info-and-image-container">
      <div className="info-cards-container">
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
      </div>

      {/* Right side Image */}
      <div className="side-image-container">
        <img
          src={sideimg}
          alt="Blood donation awareness side"
          className="side-image"
        />
      </div>
    </div>

    {/* Upcoming Drives Section */}
    <div className="upcoming-drives-container">
      <h2 className="upcoming-drives-title">Upcoming Drives</h2>
      <p className="upcoming-drives-description">
        Find a blood drive near you and help save lives. Check out our scheduled events and locations.
      </p>

      <div className="upcoming-drives-list">
        <div className="upcoming-drive-card">
          <i className="fas fa-users"></i>
          <h3>Community Center Drive</h3>
          <p>Local</p>
          <p>Join us at the community center on October 26th to donate blood and support local patients.</p>
        </div>
        <div className="upcoming-drive-card">
          <i className="fas fa-hospital"></i>
          <h3>Hospital Partnership</h3>
          <p>Medical</p>
          <p>Partnering with City Hospital on November 15th for a large-scale blood donation event.</p>
        </div>
        <div className="upcoming-drive-card">
          <i className="fas fa-building"></i>
          <h3>Corporate Drive</h3>
          <p>Corporate</p>
          <p>Hosting a blood drive at Tech Solutions Corp. on December 8th to engage employees in life-saving efforts.</p>
        </div>
        <div className="upcoming-drive-card">
          <i className="fas fa-university"></i>
          <h3>University Campaign</h3>
          <p>Education</p>
          <p>Launching a blood donation campaign at State University in January to encourage student participation.</p>
        </div>
      </div>
    </div>
  </div>
);

export default DonateCard;
