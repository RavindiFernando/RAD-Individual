import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '../../context/ThemeContext';
import OwnerImage from '../../assets/owner.jpg';
import TeamMember1Image from '../../assets/team-member1.jpg';
import TeamMember2Image from '../../assets/team-member2.jpg';
import TeamMember3Image from '../../assets/team-member3.jpg';
import TeamMember4Image from '../../assets/team-member4.jpg';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Ranmal Fernando', image: OwnerImage, position: 'Proprietor / Consultant Structural Engineer' },
  { name: 'Jeewan Chathhuranga', image: TeamMember1Image, position: 'Draftsman' },
  { name: 'Seyanthan Sri', image: TeamMember2Image, position: 'Structural Engineer' },
  { name: 'Erandika Liyanage', image: TeamMember3Image, position: 'Structural Engineer' },
  { name: 'Chathura Kodippili', image: TeamMember4Image, position: 'Structural Engineer' },
];

const Team = () => {
  const { theme } = useTheme();

    useEffect(() => {
      console.log('Team component mounted');

      document.title = 'Our Team';

      return () => {
        console.log('Team component unmounted');
      };
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
    <TeamContainer theme={theme}>
      <Typography variant="h4" component="h4" gutterBottom sx={{ color: theme === 'light' ? '#000' : '#fff' }}>Our Team</Typography>
      <TeamRow>
        <TeamMemberBox theme={theme}>
          <img src={teamMembers[0].image} alt={teamMembers[0].name} />
          <Typography variant="subtitle1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{teamMembers[0].name}</Typography>
          <Typography variant="body2" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{teamMembers[0].position}</Typography>
        </TeamMemberBox>
      </TeamRow>
      <TeamRow>
        {teamMembers.slice(1, 5).map((member, idx) => (
          <TeamMemberBox key={idx} theme={theme}>
            <img src={member.image} alt={member.name} />
            <Typography variant="subtitle1" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{member.name}</Typography>
            <Typography variant="body2" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>{member.position}</Typography>
          </TeamMemberBox>
        ))}
      </TeamRow>
    </TeamContainer>
    </motion.div>
  );
};

const TeamContainer = styled(Box)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: theme === 'light' ? 'rgba(245, 242, 237, 0.8)' : 'rgba(23, 9, 0, 0.8)',
  borderRadius: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
  maxWidth: '1100px',
  margin: 'auto',
  marginBottom: '2rem',
}));

const TeamRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  gap: '0rem',
  marginBottom: '0rem',
  '&:last-child': {
    marginBottom: '0',
  },
});

const TeamMemberBox = styled(Box)(({ theme }) => ({
  width: '20%',
  height: 'auto',
  textAlign: 'center',
  '& img': {
    width: '75%',
    height: 'auto',
    maxWidth: '100%',
    borderRadius: '48%',
    objectFit: 'cover',
    marginBottom: '0rem',
  },
  '& > *': {
    marginTop: '0.5rem',
    color: theme === 'light' ? '#000' : '#fff',
  },
}));

export default Team;
