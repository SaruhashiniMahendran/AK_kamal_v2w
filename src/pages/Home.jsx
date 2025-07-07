import React from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { BsHouseFill, BsCalendar, BsBox, BsCashStack, BsBell } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNavBar from '../components/BottomNavBar';
import '../../src/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="home-container">
      {/* Top Bar */}
      <header className="top-bar">
        <button className="menu-button">
          <FaBars size={24} />
        </button>
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </div>
        <button className="profile-button">
          <FaUserCircle size={24} />
        </button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">AK Kamal Photography</h1>
            <p className="hero-subtitle">Capturing Life's Precious Moments</p>
            <button className="primary-button">Book Now</button>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/services/wedding.jpg" alt="Wedding Photography" className="service-image" />
              <h3>Wedding Photography</h3>
              <p>Capturing your special day with timeless memories</p>
            </div>
            <div className="service-card">
              <img src="/services/portrait.jpg" alt="Portrait Photography" className="service-image" />
              <h3>Portrait Photography</h3>
              <p>Professional portraits that tell your story</p>
            </div>
            <div className="service-card">
              <img src="/services/event.jpg" alt="Event Photography" className="service-image" />
              <h3>Event Photography</h3>
              <p>Documenting your events with precision</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <p className="testimonial-text">"AK Kamal Photography captured our wedding day perfectly! The photos are beautiful and exactly what we wanted."</p>
              <div className="testimonial-author">
                <img src="/avatars/avatar1.jpg" alt="Client" className="testimonial-avatar" />
                <span>John & Jane</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Professional and creative! We're thrilled with our family portraits."</p>
              <div className="testimonial-author">
                <img src="/avatars/avatar2.jpg" alt="Client" className="testimonial-avatar" />
                <span>Mike & Sarah</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-info">
            <div className="contact-item">
              <img src="/icons/location.svg" alt="Location" />
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="contact-item">
              <img src="/icons/phone.svg" alt="Phone" />
              <span>+94 77 123 4567</span>
            </div>
            <div className="contact-item">
              <img src="/icons/email.svg" alt="Email" />
              <span>contact@akkamal.com</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default Home;