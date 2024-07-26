import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Project1Image from '../../assets/project1.jpg';
import Project2Image from '../../assets/project2.jpg';
import Project3Image from '../../assets/project3.jpg';
import Project4Image from '../../assets/project4.webp';
import Project5Image from '../../assets/project5.jpg';
import Project6Image from '../../assets/project6.jpeg';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Maalu Maalu Resort & Spa- Pasikuda', image: Project1Image },
  { title: 'Hotel Rajarata - Anuradhapura', image: Project2Image },
  { title: 'Hotel Blackpool - Nuwara Eliya ', image: Project3Image },
  { title: 'Kings Garden Residencies - Kirulapone', image: Project4Image },
  { title: 'Eco Lodge - Sigiriya', image: Project5Image },
  { title: 'Sugar Factory - Ethimale', image: Project6Image },
];

const Projects = () => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log('Projects component mounted or updated');
  
    document.title = 'Our Projects';

    return () => {
      console.log('Projects component unmounted');

    };
  }); 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1}}
      >
    <ProjectsContainer theme={theme}>
      <Typography variant="h4" component="h4" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>Our Projects</Typography>
      {chunkArray(projects, 3).map((row, index) => (
        <ProjectsRow key={index}>
          {row.map((project, idx) => (
            <ProjectBox key={idx}>
              <img src={project.image} alt={project.title} />
              <Typography variant="subtitle1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{project.title}</Typography>
            </ProjectBox>
          ))}
        </ProjectsRow>
      ))}
    </ProjectsContainer>
    </motion.div>
  );
};

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: '2rem', 
  backgroundColor: theme === 'light' ? 'rgba(245, 242, 237, 0.8)' : 'rgba(23, 9, 0, 0.8)',
  borderRadius: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
  
  maxWidth: '1100px', 
  margin: 'auto', 
}));

const ProjectsRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  gap: '2rem',
  marginBottom: '1rem', 
  '&:last-child': {
    marginBottom: '0', 
  },
});

const ProjectBox = styled(Box)({
  width: 'calc(33.33% - 1rem)', 
  textAlign: 'center',
  '& img': {
    maxWidth: '80%', 
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '0', 
  },
  '& > *': {
    marginTop: '0.5rem', 
  },
});

function chunkArray(array, size) {
  return array.reduce((chunks, item, index) => {
    if (index % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
}

export default Projects;
