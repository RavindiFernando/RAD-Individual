import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const ContactUs = () => {
  const { contactId } = useParams(); 

  const contactDetails = {
    address: 'No. 358/1, Sunethradevi Rd, Kohuwala, Nugegoda',
    phone: '+94 777672713',
    email: 'ranmalfrnnd@yahoo.com',
    workingHours: 'Mon-Fri 8:30 AM - 5:30 PM',
  };

  useEffect(() => {
    console.log('ContactUs component mounted.');

    document.title = `Contact Us - ${contactId || 'All'}`;

    return () => {
      console.log('ContactUs component unmounted.');
    };
  }, [contactId]);

  return (
    <ContactContainer>
      <ContactForm />
      <ContactInfo contactDetails={contactDetails} contactId={contactId} />
    </ContactContainer>
  );
};

const ContactContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '2rem',
  height: 'calc(100vh - 64px)',
  marginTop: '64px',
});

export default ContactUs;
