import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const History = () => {
  const { theme } = useTheme();
  useEffect(() => {
    console.log('History component mounted');
    document.title = 'Our History';
    return () => {
      console.log('History component unmounted');
    };
  });
  return (
    <HistoryWrapper>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
      <HistoryContainer theme={theme}>
        <Typography variant="h4" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>Our History</Typography>
        <Box paddingTop="1.5rem"> 
          <Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>
          Ranmal Fernando Associates (RFA) was founded in February 2007 by Eng.Ranmal Fernando, following a distinguished 17-year career as a site engineer, project engineer at State Engineering Corporation, and Chief Engineer at Kelsey Developments Pvt Ltd. RFA stands as a premier structural and civil engineering firm specializing in structural designs, project management, retrofitting works for existing buildings, and value engineering
          </Typography>
          <Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>
            Over the years, RFA has grown significantly, undertaking numerous high-profile projects and expanding its team of experts. We collaborate closely with clients, architects, MEP engineers, and quantity surveyors to achieve comprehensive project outcomes. Our extensive portfolio includes diverse sectors such as commercial buildings, mixed developments, housing schemes, apartments, hospitals, academic buildings, and large-scale factories.
          </Typography>
          <Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>
            Some of our key milestones include:
          </Typography>
          <ul>
            <li><Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>2007: RFA was founded by Ranmal Fernando.</Typography></li>
            <li><Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>2008: Completed the first major project, setting a new standard in the industry.</Typography></li>
            <li><Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>2015: Expanded operations internationally, taking on projects in multiple countries.</Typography></li>
            <li><Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>2020: Launched innovative engineering solutions that have been widely adopted in the industry.</Typography></li>
            <li><Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>2023: Celebrated 16 years of excellence with over 100 successful projects.</Typography></li>
          </ul>
          <Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>
            Today, Ranmal Fernando Associates continues to lead the way in civil and structural engineering, driven by a passion for innovation and a commitment to delivering the highest quality services to our clients.
          </Typography>
        </Box>
      </HistoryContainer>
      </motion.div>
    </HistoryWrapper>
  );
};

const HistoryWrapper = styled(Box)({
  marginTop: '2rem', 
});

const HistoryContainer = styled(Box)(({ theme }) => ({
  padding: '3rem',
  backgroundColor: theme === 'light' ? 'rgba(245, 242, 237, 0.8)' : 'rgba(23, 9, 0, 0.8)',
  borderRadius: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
  maxWidth: '800px', 
  margin: 'auto', 
}));

export default History;
