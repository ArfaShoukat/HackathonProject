import React, { useState } from "react";
import "./NeedBlood.css";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaInfoCircle,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";
import ScrollToTop from "../components/ScrollTop";
import { supabase } from "../config/Supabase";
import Swal from "sweetalert2";

const NeedBlood = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [info, setInfo] = useState("");

  const handleRequestSubmit = async () => {
    if (!name || !email || !phone || !bloodGroup) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all required fields.",
      });
      return;
    }

    const request = {
      name,
      email,
      phone,
      blood_group: bloodGroup,
      additional_info: info,
    };

    const { error } = await supabase.from("blood_requests").insert([request]);

    if (error) {
      console.error("Insert error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.message || "Could not submit your request.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Request Sent",
        text: "We’ve received your request. We'll respond shortly!",
        confirmButtonColor: "#4d0404",
      });
      setName("");
      setEmail("");
      setPhone("");
      setBloodGroup("");
      setInfo("");
    }
  };

  return (
    <>
      <div className="need-blood-page">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Need blood?
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Your blood needs are our priority.
        </motion.p>

        {/* Emergency Request Card */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Request for Emergency Blood</h2>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaPhone className="icon" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaTint className="icon" />
            <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
              <option value="">--Select Blood Type--</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="input-group">
            <FaInfoCircle className="icon" />
            <textarea
              placeholder="Any other information..."
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            ></textarea>
          </div>
          <button className="request-button" onClick={handleRequestSubmit}>
            Request Blood
          </button>
          <div className="call-now">
            <p>Emergency? Request a callback and let us help you!</p>
            <button className="call-button">
              <FaPhoneAlt /> Call Now
            </button>
          </div>
        </motion.div>

        {/* Search Stock */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Find Available Blood Stock</h2>
          <div className="input-group">
            <FaSearch className="icon" />
            <select>
              <option value="">--Select Blood Group--</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <button className="search-button">Search</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Blood Group</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>A+</td><td>Available</td></tr>
              <tr><td>A+</td><td>Not Available</td></tr>
              <tr><td>B+</td><td>Available</td></tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="card info-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Collecting Blood</h2>
          <p>From start to finish, here's what to expect.</p>
          <ol>
            <li><strong>01 - Registration:</strong> Provide personal info and medical history.</li>
            <li><strong>02 - Screening:</strong> Vital signs check & eligibility questions.</li>
            <li><strong>03 - Donation:</strong> Blood is drawn and stored safely.</li>
          </ol>
        </motion.div>

        <motion.div
          className="card info-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
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

      <footer className="footer">
        <p><FaInfoCircle /> LifeLink | Karachi, Pakistan | Open 24/7</p>
        <p><FaPhone /> (+92)-867-678-6789 | <FaEnvelope /> help@lifeLink.com</p>
        <p>&copy; 2023 LifeLink - Website design by Arfa</p>
      </footer>

      <ScrollToTop />
    </>
  );
};

export default NeedBlood;
