import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button, Typography } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import './ContactForm.css';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({
    success: '',
    error: '',
  });

  const { theme } = useTheme();
  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = async (values, formik) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus({ success: 'Message sent successfully!', error: '' });
      formik.resetForm();
    } catch (error) {
      setFormStatus({ success: '', error: 'Failed to send message.' });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formik) => handleSubmit(values, formik),
  });

  useEffect(() => {
    console.log("ContactForm component mounted");

    return () => {
      console.log("ContactForm component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("ContactForm component updated");
    localStorage.setItem('formData', JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <form className={`styled-form ${themeClass}`} onSubmit={formik.handleSubmit}>
      <Typography variant="h4" component="h4">Send Us A Message</Typography>
      <TextField
        className={`styled-text-field ${themeClass}`} 
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        className={`styled-text-field ${themeClass}`} 
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        className={`styled-text-field ${themeClass}`} 
        id="message"
        name="message"
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <Button
        className={`styled-button ${themeClass}`} 
        variant="contained"
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Sending...' : 'Send'}
      </Button>
      {formStatus.success && (
        <Typography className="success-message">{formStatus.success}</Typography>
      )}
      {formStatus.error && (
        <Typography color="error">{formStatus.error}</Typography>
      )}
    </form>
  );
};

export default ContactForm;
