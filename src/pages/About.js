import React, { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import './About.css';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  
  useEffect(() => {
    document.title = 'About Us - RFA';
    console.log('About component mounted');
    
    return () => {
      console.log('About component unmounted');
    };
  }, []);

  
  useEffect(() => {
    if (location.pathname === '/about') {
      navigate('/about/history');
    }
  }, [location.pathname, navigate]);

  const sidebarLinks = [
    { to: '/about/history', label: 'History' },
    { to: '/about/mission', label: 'Mission' },
    { to: '/about/values', label: 'Values' },
    { to: '/about/projects', label: 'Projects' },
    { to: '/about/team', label: 'Team' },
  ];

  return (
    <div className={`about-container ${theme}`}>
      <div className="sidebar">
        <Typography variant="h6" className="sidebar-title">About</Typography>
        {sidebarLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`sidebar-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default About;
