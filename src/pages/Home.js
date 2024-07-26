import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import collage from '../assets/collage.png';
import './Home.css';

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const { theme } = useTheme();

  useEffect(() => {
    const updateWelcomeMessage = () => {
      const hour = new Date().getHours();
      const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
      const userPart = userName ? `, ${userName}!` : '!';
      setWelcomeMessage(`${greeting}${userPart}`);
    };

    updateWelcomeMessage();
    const interval = setInterval(updateWelcomeMessage, 60000);

    document.title = "Home Page - RFA";

    console.log("Home component mounted");

    return () => {
      clearInterval(interval);
      console.log("Home component unmounted");
    };
  }, [userName]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    localStorage.setItem('userName', value);
  };

  return (
    <Box className="container">
      <div className={`banner ${theme === 'dark' ? 'dark' : 'light'}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" component="h7" className={theme === 'dark' ? 'text-white' : 'text-black'}>
            {welcomeMessage}
          </Typography>
          <Typography variant="h6" component="p" className={theme === 'dark' ? 'text-white' : 'text-black'}>
          Welcome to Ranmal Fernando Associates (RFA), a leading consultancy firm specializing in structural and civil engineering since February 2007. Known for our commitment to safety and efficiency, we've successfully completed numerous projects across sectors such as commercial buildings, mixed developments, housing schemes, apartments, hospitals, academic buildings, and large-scale factories. At RFA, we set industry trends through innovation, state-of-the-art technologies, and excellence in engineering. With over 300 projects under our belt, our dedication to quality ensures exceptional solutions for every endeavor.
          </Typography>
          <Button variant="contained" className={`custom-button ${theme === 'dark' ? 'dark-button' : 'light-button'}`} component={Link} to="/contact">
            Reach Us
          </Button>
          <div className="name-input-box">
            <TextField
              label="Enter Your Name"
              variant="outlined"
              margin="normal"
              size="small"
              value={userName}
              onChange={handleInputChange}
              className={`name-input ${theme === 'dark' ? 'dark-input' : 'light-input'}`}
              InputLabelProps={{ className: theme === 'dark' ? 'text-white' : 'text-black' }}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="collage-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="collage">
          <img src={collage} alt="Collage" className="collage-image" />
        </div>
      </motion.div>
    </Box>
  );
};

export default Home;
