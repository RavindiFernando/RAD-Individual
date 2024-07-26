
import { motion } from 'framer-motion';
import { Typography, Button, TextField  } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import collage from '../assets/collage.png';
import './Home.css';

const New = () => {
  const { theme } = useTheme();

  

  return (
    <body>
      <div className={`banner ${theme === 'dark' ? 'dark' : 'light'}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
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
    </body>
  );
};

export default New;
