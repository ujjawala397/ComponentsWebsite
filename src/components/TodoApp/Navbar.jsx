import { AppBar, Toolbar } from '@mui/material';

import React from 'react'

const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
                <div style={{textAlign:'center'}}>Todo App</div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;