import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../BottomNavBar.css';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { 
      path: '/', 
      label: 'Home',
      icon: (active) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 2L3 9V22H21V9L12 2Z" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill={active ? "#1a73e8" : "none"}
          />
        </svg>
      )
    },
    { 
      path: '/calendar', 
      label: 'Calendar',
      icon: (active) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect 
            x="3" y="4" width="18" height="18" rx="2" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill={active ? "#1a73e8" : "none"}
          />
          <path 
            d="M16 2V6" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M8 2V6" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M3 10H21" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    { 
      path: '/order', 
      label: 'Order',
      icon: (active) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill={active ? "#1a73e8" : "none"}
          />
          <path 
            d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    { 
      path: '/finance', 
      label: 'Finance',
      icon: (active) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 2V22" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill={active ? "#1a73e8" : "none"}
          />
        </svg>
      )
    },
    { 
      path: '/alerts', 
      label: 'Alert',
      icon: (active) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill={active ? "#1a73e8" : "none"}
          />
          <path 
            d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" 
            stroke={active ? "#1a73e8" : "#666666"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )
    }
  ];

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => {
        const active = isActive(item.path);
        return (
          <button 
            key={item.path}
            className={`nav-button ${active ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <div className="nav-icon">
              {item.icon(active)}
            </div>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;