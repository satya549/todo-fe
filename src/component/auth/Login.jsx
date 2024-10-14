import React, { useState } from 'react';
import { Container, TextField, Typography, Button, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';  // Import for React Router Link
import Navbar from '../shared/Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
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
          Login
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
          Login
        </Button>

        {/* Link to the Signup page for new users */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link
            component={RouterLink}
            to="/signup"
            sx={{ color: 'blue', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Signup
          </Link>
        </Typography>
      </Box>
    </Container>
    </div>
  );
};

export default Login;