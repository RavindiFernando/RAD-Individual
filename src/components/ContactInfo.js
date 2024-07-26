import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Typography, Box } from '@mui/material';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';
import './ContactInfo.css'; 
import { motion } from 'framer-motion';

const ContactInfo = ({ contactDetails, contactId }) => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("ContactInfo component mounted");
    document.title = "Contact Info - RFA";
    
    return () => {
      console.log("ContactInfo component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("ContactInfo component updated");
  });

  return (
    <Box className={`info-container ${theme}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" component="h4" className="info-heading">Contact Info</Typography>
        <Box className="contact-info-grid">
          {(!contactId || contactId === 'address') && (
            <Box className="contact-info-box">
              <LocationOn className="icon" />
              <Typography variant="body1" component="p" align="center">
                <strong>Address</strong><br />
                {contactDetails.address}
              </Typography>
            </Box>
          )}
          {(!contactId || contactId === 'phone') && (
            <Box className="contact-info-box">
              <Phone className="icon" />
              <Typography variant="body1" component="p" align="center">
                <strong>Phone Number</strong><br />
                {contactDetails.phone}
              </Typography>
            </Box>
          )}
          {(!contactId || contactId === 'email') && (
            <Box className="contact-info-box">
              <Email className="icon" />
              <Typography variant="body1" component="p" align="center">
                <strong>Email</strong><br />
                {contactDetails.email}
              </Typography>
            </Box>
          )}
          {(!contactId || contactId === 'workingHours') && (
            <Box className="contact-info-box">
              <AccessTime className="icon" />
              <Typography variant="body1" component="p" align="center">
                <strong>Working Hours</strong><br />
                {contactDetails.workingHours}
              </Typography>
            </Box>
          )}
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactInfo;
