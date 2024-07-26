import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Mission = () => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log('Mission component mounted or updated');
    
    document.title = 'Our Mission';

    return () => {
      console.log('Mission component unmounted');
    };
  });

  return (
    <MissionWrapper>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
      <MissionContainer theme={theme}>
        <Typography variant="h4" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>Our Mission</Typography>
        <Box paddingTop="1.5rem"> 
          <Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>
            Maintaining professional standards for structural engineering, ensuring continued technical excellence, advancing safety, creativity and innovation across the built environment and promoting sustainable approaches in engineering solutions, supporting engineers as they protect, influence and take forward our environment’s conservation responsibility.
          </Typography>
        </Box>
      </MissionContainer>
      </motion.div>
    </MissionWrapper>
  );
};

const MissionWrapper = styled(Box)({
  marginTop: '2rem', 
});

const MissionContainer = styled(Box)(({ theme }) => ({
  padding: '3rem',
  backgroundColor: theme === 'light' ? 'rgba(245, 242, 237, 0.8)' : 'rgba(23, 9, 0, 0.7)',
  borderRadius: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
  maxWidth: '800px', 
  margin: 'auto', 
}));

export default Mission;
