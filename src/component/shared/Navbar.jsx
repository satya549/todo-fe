import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();  

  // const handleLoginClick = () => {
  //   navigate('/login');  
  // };

  // const handleSignupClick = () => {
  //   navigate('/signup');  
  // };



  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Management App
        </Typography>
        <Box>
          
          <Button
            sx={{
              backgroundColor: "green",
              color: "white",
              marginRight: 2,
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
            // onClick={handleLoginClick}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>

          <Button
            sx={{
              backgroundColor: "green",
              color: "white",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
            // onClick={handleSignupClick}
            onClick={() => navigate('/signup')}
          >
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
