import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box>
        <AppBar style={{ backgroundColor: "#4267B2" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }} align="left">
              App
            </Typography>
            <Link to="/" style={{textDecoration:'none',color:'white'}}>
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/table" style={{textDecoration:'none',color:'white'}}>
              <Button color="inherit">table</Button>
            </Link>
            <Link to="/view" style={{textDecoration:'none',color:'white'}}>
              <Button color="inherit">view</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
