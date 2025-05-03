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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const DonateBlood = () => {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [bloodGroup, setBloodGroup] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const donor = { name, email, phone, bloodGroup, notes };
    const existing = JSON.parse(localStorage.getItem("donors")) || [];
    localStorage.setItem("donors", JSON.stringify([...existing, donor]));

    // Optionally, you can show a toast or modal here
    alert("Your appointment is booked!");

    // Navigate to DonorList page after submission
    navigate("/DonorList");
  };

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

      <motion.section
        className="appointment-form"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="form-container">
          <motion.div className="form-left" variants={fadeUp}>
            <img src={donateImg} alt="Donate" />
          </motion.div>

          <motion.form className="form-right" variants={fadeUp} onSubmit={handleSubmit}>
            <h2>
              <FaCalendarAlt /> Book Your Donation
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Blood Group"
              required
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
            <textarea
              placeholder="Additional Notes..."
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <motion.button
              type="submit"
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
            >
              Confirm Appointment
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
      <section className="donation-process">
        <h2>
          <FaTint /> How It Works
        </h2>
        <div className="steps">
          {[
            {
              step: "01",
              title: "Check Eligibility",
              desc: "Ensure you meet the minimum health and age requirements.",
            },
            {
              step: "02",
              title: "Book Your Slot",
              desc: "Choose a date and time that works for you to donate.",
            },
            {
              step: "03",
              title: "Donate Blood",
              desc: "Come in, relax, and help save lives in just a few minutes.",
            },
          ].map((item, index) => (
            <motion.div
              className="step"
              key={item.title}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="eligibility"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>
          <FaCheckCircle /> Who Can Donate?
        </h2>
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

      <motion.section
        className="why-donate"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>
          <FaHandHoldingHeart /> Why Donate Blood?
        </h2>
        <p>
          Your donation could be the difference between life and death for someone in need. Blood is essential during surgeries, emergencies, and treatments — and it cannot be manufactured. Your contribution gives others a second chance at life.
        </p>
      </motion.section>

      <motion.section
        className="cta-quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <blockquote>
          “You don’t need a cape to be a hero — just a kind heart and a willingness to donate blood.”
        </blockquote>
        <h3>Make a difference. Donate today!</h3>
        <motion.button className="primary-btn" whileHover={{ scale: 1.05 }}>
          Start Saving Lives
        </motion.button>
      </motion.section>
      <footer className="footer">
        <p>
          <FaInfoCircle /> LifeLink | Karachi, Pakistan | Open 24/7
        </p>
        <p>
          <FaPhone /> (+92)-867-678-6789 | <FaEnvelope /> help@lifeLink.com
        </p>
        <p>&copy; 2023 LifeLink - Website design by Arfa</p>
      </footer>
      <ScrollToTop />
    </div>
  );
};
export default DonateBlood