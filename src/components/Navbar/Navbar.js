import { AppBar, Button, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        
               
            <AppBar>

              <Toolbar>
                <IconButton size='large' edge ='start' color='inherit' aria-label='logo'>
                <CardMedia
                    component="img"
                    image="../react.png"
                    alt="logo"
                    height="50px auto"
                    >

                </CardMedia>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                  Components Made By Me
                  
                </Typography>
                
                <Stack direction="row" spacing={2}>
                  <Button color='inherit'> <Link to="/" style={{ textDecoration: 'none', color:'white' }}>Home</Link></Button>
                  <Button color='inherit'> <Link to="/about" style={{ textDecoration: 'none', color:'white' }}>About</Link></Button>
                  <Button color='inherit'> <Link to="/contact" style={{ textDecoration: 'none', color:'white' }}>Contact</Link></Button>
                </Stack>
              </Toolbar>

            </AppBar>
           
        
        

    )
}
export default Navbar;