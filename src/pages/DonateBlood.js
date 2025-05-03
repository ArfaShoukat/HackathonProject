import React from "react";
import "./DonateBlood.css";
import { FaHeartbeat, FaTint, FaCalendarAlt, FaCheckCircle, FaInfoCircle, FaHandHoldingHeart, FaPhone, FaEnvelope } from "react-icons/fa";
import donateImg from '../components/images/donateimg.jpg';

const DonateBlood = () => {
  return (
    
    <div className="donate-container">
      <section className="hero-section">
        <h1>Give the Gift of Life</h1>
        <p>One donation can change someone's world. Become a blood donor today.</p>
        <button className="primary-btn">Book an Appointment</button>
      </section>


      <section className="appointment-form">
  
  <div className="form-container">
    <div className="form-left">
      <img src={donateImg} alt="Donate Image" />
    </div>
    <form className="form-right">
    <h2><FaCalendarAlt /> Book Your Donation</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="text" placeholder="Blood Group" required />
      <textarea placeholder="Additional Notes..." rows="4"></textarea>
      <button className="primary-btn" type="submit">Confirm Appointment</button>
    </form>
  </div>
</section>


      <section className="donation-process">
        <h2><FaTint /> How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Check Eligibility</h3>
            <p>Ensure you meet the minimum health and age requirements.</p>
          </div>
          <div className="step">
            <span>02</span>
            <h3>Book Your Slot</h3>
            <p>Choose a date and time that works for you to donate.</p>
          </div>
          <div className="step">
            <span>03</span>
            <h3>Donate Blood</h3>
            <p>Come in, relax, and help save lives in just a few minutes.</p>
          </div>
        </div>
      </section>

      <section className="eligibility">
        <h2><FaCheckCircle /> Who Can Donate?</h2>
        <ul>
          <li>Aged 18–50 and weigh at least 50 kg</li>
          <li>Healthy vital signs and normal blood pressure</li>
          <li>No recent illness or infections</li>
          <li>Hemoglobin level above 12.5 g/dL</li>
          <li>No history of transmissible conditions</li>
        </ul>
        <button className="primary-btn">I’m Eligible – Let’s Donate</button>
      </section>

      <section className="why-donate">
        <h2><FaHandHoldingHeart /> Why Donate Blood?</h2>
        <p>Your donation could be the difference between life and death for someone in need. Blood is essential during surgeries, emergencies, and treatments — and it cannot be manufactured. Your contribution gives others a second chance at life.</p>
      </section>

      <section className="cta-quote">
        <blockquote>“You don’t need a cape to be a hero — just a kind heart and a willingness to donate blood.”</blockquote>
        <h3>Make a difference. Donate today!</h3>
        <button className="primary-btn">Start Saving Lives</button>
      </section>

      <footer className="footer">
        <p><FaInfoCircle /> LifeLink | Karachi, Pakistan | Open 24/7</p>
        <p><FaPhone /> (+92)-867-678-6789 | <FaEnvelope /> help@lifeLink.com</p>
        <p>&copy; 2023 LifeLink - Website design by Arfa</p>
      </footer>
    </div>
  );
};

export default DonateBlood;
