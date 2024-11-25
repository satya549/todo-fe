import React, { useState } from 'react';
import { Container, TextField, Typography, Button, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';  
import Navbar from '../shared/Navbar';
import axios from 'axios';

const Signup  = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // const [openSnackbar, setOpenSnackbar] = useState(false);
  // const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3900/user/register', formData)
      console.log('Signup successfully', response.data)
    } catch (error) {
      console.log( error.response?.data || error.message)
    }
  };


  return (
    <div>
      <Navbar /> 
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1">
          Signup
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: '10px 0' }}
        >
          Signup
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link
            component={RouterLink}
            to="/login"
            sx={{ color: 'blue', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
      </div>
  );
};

export default Signup ;