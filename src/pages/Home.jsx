import React from 'react';
import { BsHouseFill, BsCalendar, BsBox, BsCashStack, BsBell } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNavBar from '../components/BottomNavBar';
import TopBar from '../components/TopBar';
import './styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="home-container">
      <div className="status-bar"></div>
      <div className="notch-bar"></div>
      <div className="top-content">
        <TopBar />
      </div>
      <div className="content-bar"></div>
      <div className="bottom-content">
        <BottomNavBar />
      </div>
      <div class="Home-indicator"></div>
    </div>
  );
};

export default Home;