
import React from 'react';
import './DonateCard.css';
import '../App.css'

const DonateCard = () => (
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
);

export default DonateCard;
