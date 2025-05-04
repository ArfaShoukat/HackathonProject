import React from "react";
import "./NeedBlood.css";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaTint, FaInfoCircle, FaPhoneAlt, FaSearch } from "react-icons/fa";

const NeedBlood = () => {
  return (
    <div className="need-blood-page">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Need blood?
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Your blood needs are our priority.
      </motion.p>

      {/* Request Blood Card */}
      <motion.div className="card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h2>Request for Emergency Blood</h2>
        <div className="input-group"><FaUser className="icon" /><input type="text" placeholder="Full Name" /></div>
        <div className="input-group"><FaEnvelope className="icon" /><input type="email" placeholder="Email Address" /></div>
        <div className="input-group"><FaPhone className="icon" /><input type="tel" placeholder="Phone Number" /></div>
        <div className="input-group">
          <FaTint className="icon" />
          <select>
            <option value="">--Select Blood Type--</option>
            <option value="A+">A+</option><option value="B+">B+</option><option value="O+">O+</option>
            <option value="AB+">AB+</option><option value="A-">A-</option><option value="B-">B-</option>
            <option value="O-">O-</option><option value="AB-">AB-</option>
          </select>
        </div>
        <div className="input-group"><FaInfoCircle className="icon" /><textarea placeholder="Any other information..."></textarea></div>
        <button className="request-button">Request Blood</button>
        <div className="call-now">
          <p>Emergency? Request a callback and let us help you!</p>
          <button className="call-button"><FaPhoneAlt /> Call Now</button>
        </div>
      </motion.div>

      {/* Availability Card */}
      <motion.div className="card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h2>Find Available Blood Stock</h2>
        <div className="input-group">
          <FaSearch className="icon" />
          <select>
            <option value="">--Select Blood Group--</option>
            <option value="A+">A+</option><option value="A-">A-</option><option value="B+">B+</option>
            <option value="B-">B-</option><option value="O+">O+</option><option value="O-">O-</option>
            <option value="AB+">AB+</option><option value="AB-">AB-</option>
          </select>
          <button className="search-button">Search</button>
        </div>
        <table>
          <thead><tr><th>Blood Group</th><th>Availability</th></tr></thead>
          <tbody>
            <tr><td>A+</td><td>Available</td></tr>
            <tr><td>A+</td><td>Not Available</td></tr>
            <tr><td>B+</td><td>Available</td></tr>
          </tbody>
        </table>
      </motion.div>

      {/* Info Section */}
      <motion.div className="card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <h2>Collecting Blood</h2>
        <p>From start to finish, here's what to expect.</p>
        <ol>
          <li><strong>01 - Registration:</strong> Provide personal info and medical history.</li>
          <li><strong>02 - Screening:</strong> Vital signs check & eligibility questions.</li>
          <li><strong>03 - Donation:</strong> Blood is drawn and stored safely.</li>
        </ol>
      </motion.div>

      {/* Tips Section */}
      <motion.div className="card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <h2>Tips for Managing Blood Loss</h2>
        <ul>
          <li>Stay calm and avoid strenuous activity.</li>
          <li>Elevate the affected area to reduce bleeding.</li>
          <li>Apply pressure to slow bleeding.</li>
          <li>Stay hydrated with fluids.</li>
          <li>Eat iron-rich foods like spinach & beans.</li>
          <li>Take supplements if recommended.</li>
          <li>Monitor and record your condition.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NeedBlood;
