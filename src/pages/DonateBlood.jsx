import React from "react";
import "./DonateBlood.css";
import { motion } from "framer-motion";
import {
  FaTint,
  FaCalendarAlt,
  FaCheckCircle,
  FaInfoCircle,
  FaHandHoldingHeart,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import donateImg from "../components/images/donateimg.jpg";
import ScrollToTop from "../components/ScrollTop";
import { supabase } from "../config/Supabase";
import Swal from 'sweetalert2';


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Peshawar",
  "Quetta",
  "Multan",
];

const DonateBlood = () => {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [bloodGroup, setBloodGroup] = React.useState("");
  const [city, setCity] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donor = { name, email, phone, blood_group: bloodGroup, notes, city };
    const { data, error } = await supabase.from("donors").insert([donor]);

    if (error) {
      console.error("Supabase error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to book appointment. Please try again.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Appointment Confirmed!",
        text: "Thank you for booking. We'll see you soon!",
        confirmButtonColor: "#4d0404",
      }).then(() => {
        navigate("/DonorList");
      })
    }
  }

  return (
    <div className="donate-container">
      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1>Give the Gift of Life</h1>
        <p>One donation can change someone's world. Become a blood donor today.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="primary-btn">
          Book an Appointment
        </motion.button>
      </motion.section>

      <motion.section className="appointment-form" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="form-container">
          <motion.div className="form-left" variants={fadeUp}>
            <img src={donateImg} alt="Donate" />
          </motion.div>

          <motion.form className="form-right" variants={fadeUp} onSubmit={handleSubmit}>
            <h2><FaCalendarAlt /> Book Your Donation</h2>
            <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Phone Number (+92...)" required value={phone} onChange={(e) => setPhone(e.target.value)} />

            <select required value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
              <option value="">Select Blood Group</option>
              {bloodGroups.map(group => <option key={group} value={group}>{group}</option>)}
            </select>

            <select required value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>

            <textarea placeholder="Additional Notes..." rows="4" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

            <div className="button-row">
              <motion.button type="submit" className="primary-btn" whileHover={{ scale: 1.05 }}>
                Confirm Appointment
              </motion.button>
              <motion.button type="button" className="primary-btn" whileHover={{ scale: 1.05 }} onClick={() => navigate("/DonorList")}>
                View Donor List
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.section>

      <section className="donation-process">
        <h2><FaTint /> How It Works</h2>
        <div className="steps">
          {["Check Eligibility", "Book Your Slot", "Donate Blood"].map((title, index) => (
            <motion.div
              className="step"
              key={title}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span>{`0${index + 1}`}</span>
              <h3>{title}</h3>
              <p>{
                index === 0
                  ? "Ensure you meet the minimum health and age requirements."
                  : index === 1
                    ? "Choose a date and time that works for you to donate."
                    : "Come in, relax, and help save lives in just a few minutes."
              }</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section className="eligibility" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2><FaCheckCircle /> Who Can Donate?</h2>
        <ul>
          <li>Aged 18–50 and weigh at least 50 kg</li>
          <li>Healthy vital signs and normal blood pressure</li>
          <li>No recent illness or infections</li>
          <li>Hemoglobin level above 12.5 g/dL</li>
          <li>No history of transmissible conditions</li>
        </ul>
        <motion.button className="primary-btn" whileHover={{ scale: 1.05 }}>
          I’m Eligible – Let’s Donate
        </motion.button>
      </motion.section>

      <motion.section className="why-donate" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2><FaHandHoldingHeart /> Why Donate Blood?</h2>
        <p>
          Your donation could be the difference between life and death for someone in need. Blood is essential during surgeries, emergencies, and treatments — and it cannot be manufactured. Your contribution gives others a second chance at life.
        </p>
      </motion.section>

      <motion.section className="cta-quote" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <blockquote>
          “You don’t need a cape to be a hero — just a kind heart and a willingness to donate blood.”
        </blockquote>
        <h3>Make a difference. Donate today!</h3>
        <motion.button className="primary-btn" whileHover={{ scale: 1.05 }}>
          Start Saving Lives
        </motion.button>
      </motion.section>

      <footer className="footer">
        <p><FaInfoCircle /> LifeLink | Karachi, Pakistan | Open 24/7</p>
        <p><FaPhone /> (+92)-867-678-6789 | <FaEnvelope /> help@lifeLink.com</p>
        <p>&copy; 2023 LifeLink - Website design by Arfa</p>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default DonateBlood;
