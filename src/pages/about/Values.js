import React ,{ useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const values = [
  { title: 'Innovation', description: 'Demonstrating a commitment to innovative engineering solutions and technologies that improve efficiency, sustainability, and safety.' },
  { title: 'Integrity', description: 'Upholding ethical standards and transparency in all business dealings and project executions.' },
  { title: 'Safety', description: 'Safety is paramount. We prioritize the well-being of our team and stakeholders with rigorous safety measures.' },
  { title: 'Teamwork', description: 'Together, we achieve more. We value teamwork, diversity, and mutual respect in all partnerships.' },
  { title: 'Sustainability', description: 'Promoting environmentally friendly practices and sustainable building solutions.' },
  { title: 'Client Focus', description: 'Our clients needs drive us. We collaborate closely to exceed expectations and deliver tailored solutions.' },
];

const Values = () => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log('Values component mounted');

    document.title = 'Our Values';

    return () => {
      console.log('Values component unmounted');
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1}}
      >
    <ValuesContainer theme={theme}>
      <Typography variant="h4" component="h4" sx={{ mb: '2rem', color: theme === 'light' ? '#000' : '#fff' }}>Our Values</Typography>
      <ValuesContent>
        <Column>
          {values.slice(0, 3).map((value, index) => (
            <ValueBox key={index} theme={theme}>
              <Typography variant="h6" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{value.title}</Typography>
              <Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{value.description}</Typography>
            </ValueBox>
          ))}
        </Column>
        <Column>
          {values.slice(3, 6).map((value, index) => (
            <ValueBox key={index} theme={theme}>
              <Typography variant="h6" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{value.title}</Typography>
              <Typography variant="body1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{value.description}</Typography>
            </ValueBox>
          ))}
        </Column>
      </ValuesContent>
    </ValuesContainer>
    </motion.div>
  );
};

const ValuesContainer = styled(Box)(({ theme }) => ({
  padding: '3rem',
  backgroundColor: theme === 'light' ? 'rgba(245, 242, 237, 0.8)' : 'rgba(23, 9, 0, 0.8)',
  borderRadius: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
  marginBottom: '2rem',
}));

const ValuesContent = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  maxWidth: '1100px',
  margin: 'auto',
});

const Column = styled(Box)({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

const ValueBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme === 'light' ? '#faf7f2' : '#362a20',
  padding: '1rem',
  borderRadius: '5px',
}));

export default Values;
