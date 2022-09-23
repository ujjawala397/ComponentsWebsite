import { AppBar, Button, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

import Text from './text';
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
                <Text/>
                <Stack direction="row" spacing={2}>
                  <Button color='inherit'> <Link to="/" style={{ textDecoration: 'none' }}>Home</Link></Button>
                  <Button color='inherit'> <Link to="/about" style={{ textDecoration: 'none' }}>About</Link></Button>
                  <Button color='inherit'> <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></Button>
                </Stack>
              </Toolbar>

            </AppBar>
           
        
        

    )
}
export default Navbar;