// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollTop.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </div>
  );
};

export default ScrollToTop;
