import React from 'react';
import './DonateCard.css';
import img1 from './images/img1.jpeg'; 

const DonateCard = () => (
  <div className="donate-section">
    <div className="gradient-card">
      <h2 className="card-title">Give the Gift of Life: Donate Blood</h2>
      <p className="card-description">
        Your blood donation can make a life-saving difference. Join LifeLink in supporting our community's blood needs.
      </p>
      <div className="card-buttons">
        <button className="card-button">Find a Drive</button>
        <button className="card-button">Learn More</button>
      </div>
    </div>

    <div className="donate-image-container">
      <img
        src={img1}
        alt="Blood donation awareness"
        className="donate-image"
      />
    </div>

    {/* Info Cards with Icons */}
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
  </div>
);

export default DonateCard;
