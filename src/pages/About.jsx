import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/about.jpg" alt="About AK Kamal Photography" />
        </div>
        <div className="about-text">
          <p>AK Kamal Photography is a professional photography service specializing in capturing life's most precious moments. With years of experience and a passion for photography, we strive to create stunning, memorable images that tell your story.</p>
          <p>Our services include wedding photography, portrait photography, and event photography. We use the latest equipment and techniques to ensure the highest quality results.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
