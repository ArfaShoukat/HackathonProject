import React from 'react';
import './AboutUs.css';
import { FaHandHoldingHeart, FaUsers, FaTint, FaLink, FaUserMd, FaRegComments } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1>Our Lifesaving Mission</h1>
        <p className="intro">Connecting Donors, Saving Lives</p>
        <p className="description">
          At LifeLink, we're driven by a simple yet powerful mission: to ensure a stable and readily available blood supply for everyone in need.
        </p>

        <div className="mission-goals">
          <div className="goal"><FaRegComments /><h3>Raise Awareness</h3><p>Educating the public on the vital role of blood donation.</p></div>
          <div className="goal"><FaTint /><h3>Organize Drives</h3><p>Creating convenient opportunities for individuals to donate blood.</p></div>
          <div className="goal"><FaLink /><h3>Connect Donors</h3><p>Linking generous donors with those in urgent need of blood.</p></div>
        </div>

        <blockquote>“The smallest act of kindness is worth more than the grandest intention.” – Oscar Wilde</blockquote>

        <h2>Meet Our Dedicated Team</h2>
        <div className="team">
          <div className="team-member"><FaUserMd /><h4>Dr. Emily Carter</h4><p>Executive Director</p></div>
          <div className="team-member"><FaUserMd /><h4>David Rodriguez</h4><p>Donation Coordinator</p></div>
          <div className="team-member"><FaUserMd /><h4>Sarah Johnson</h4><p>Communications Manager</p></div>
        </div>

        <h2>Our History: A Legacy of Lifesaving</h2>
        <p className="description">
          Founded in 2010 by passionate healthcare professionals, LifeLink has grown from a small initiative to a major force in blood donation. We now work with hospitals and communities to ensure reliable blood supply using technology and partnerships.
        </p>
        <a href="#" className="btn">Learn More</a>

        <h2>LifeLink by the Numbers</h2>
        <div className="stats">
          <div className="stat"><h3>15,000+</h3><p>Donations Collected</p></div>
          <div className="stat"><h3>45,000+</h3><p>Lives Impacted</p></div>
          <div className="stat"><h3>300+</h3><p>Blood Drives Organized</p></div>
          <div className="stat"><h3>1,000+</h3><p>Volunteers Involved</p></div>
        </div>

        <div className="faq">
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
