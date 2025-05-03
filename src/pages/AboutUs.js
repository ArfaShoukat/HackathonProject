import React from 'react';
import './AboutUs.css';
import { FaTint, FaLink, FaUserMd, FaRegComments, FaPhone, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollTop';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,   
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container">

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Lifesaving Mission
        </motion.h1>

        <motion.p
          className="intro"
          variants={fadeInUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Connecting Donors, Saving Lives
        </motion.p>

        <motion.p
          className="description"
          variants={fadeInUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          At LifeLink, we're driven by a simple yet powerful mission: to ensure a stable and readily available blood supply for everyone in need.
        </motion.p>

        <div className="mission-goals">
          {[{
            icon: <FaRegComments />,
            title: 'Raise Awareness',
            desc: 'Educating the public on the vital role of blood donation.'
          }, {
            icon: <FaTint />,
            title: 'Organize Drives',
            desc: 'Creating convenient opportunities for individuals to donate blood.'
          }, {
            icon: <FaLink />,
            title: 'Connect Donors',
            desc: 'Linking generous donors with those in urgent need of blood.'
          }].map((goal, index) => (
            <motion.div
              className="goal"
              key={goal.title}
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {goal.icon}
              <h3>{goal.title}</h3>
              <p>{goal.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          variants={fadeInUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          “The smallest act of kindness is worth more than the grandest intention.” – Oscar Wilde
        </motion.blockquote>

        <motion.h2
          variants={fadeInUp}
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Meet Our Dedicated Team
        </motion.h2>

        <div className="team">
          {[
            { name: "Dr. Emily Carter", role: "Executive Director" },
            { name: "David Rodriguez", role: "Donation Coordinator" },
            { name: "Sarah Johnson", role: "Communications Manager" }
          ].map((member, index) => (
            <motion.div
              className="team-member"
              key={member.name}
              custom={5}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaUserMd />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          variants={fadeInUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our History: A Legacy of Lifesaving
        </motion.h2>

        <motion.p
          className="description"
          variants={fadeInUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Founded in 2010 by passionate healthcare professionals, LifeLink has grown from a small initiative to a major force in blood donation. We now work with hospitals and communities to ensure reliable blood supply using technology and partnerships.
        </motion.p>

        <motion.a
          href="#"
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Learn More
        </motion.a>

        <motion.h2
          variants={fadeInUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          LifeLink by the Numbers
        </motion.h2>

        <div className="stats">
          {[
            { num: "15,000+", label: "Donations Collected" },
            { num: "45,000+", label: "Lives Impacted" },
            { num: "300+", label: "Blood Drives Organized" },
            { num: "1,000+", label: "Volunteers Involved" }
          ].map((stat, index) => (
            <motion.div
              className="stat"
              key={stat.label}
              custom={5}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{stat.num}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq"
          variants={fadeInUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>What is LifeLink's mission?</summary>
            <p>To ensure a stable and safe blood supply through awareness, drives, and connection.</p>
          </details>
          <details>
            <summary>How can I get involved with LifeLink?</summary>
            <p>Join as a volunteer, donate blood, or partner with us on drives.</p>
          </details>
          <details>
            <summary>What are the eligibility criteria for blood donation?</summary>
            <p>You must be 18+, healthy, and meet standard medical requirements.</p>
          </details>
        </motion.div>

        <motion.footer
          className="footer"
          variants={fadeInUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p><FaInfoCircle /> LifeLink | Karachi, Pakistan | Open 24/7</p>
          <p><FaPhone /> (+92)-867-678-6789 | <FaEnvelope /> help@lifeLink.com</p>
          <p>&copy; 2023 LifeLink - Website design by Arfa</p>
        </motion.footer>
        <ScrollToTop />
      </div>
    </section>
  );
};

export default AboutUs;
