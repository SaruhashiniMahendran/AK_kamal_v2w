import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BottomNavBar.css';

const BottomNavBar = () => {
  return (
    <div className="bottom-nav-bar">
      <div className="home-icon"></div>
      <div className="calendar-icon"></div> 
      <div className="order-icon"></div>
      <div className="finance-icon"></div>
      <div className="alerts-icon"></div>
    </div>      
  );
};

export default BottomNavBar;