import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import navBarStyles from './navBarStyles';
import clsx from 'clsx';
import logoInvernia from './logoInvernia.png';
import './navbar.css';
function NavBar() {
  const classes = navBarStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <div className={clsx(classes.backNavBar)}>
          <Toolbar>
            <Typography variant='h6'>
              <img src={logoInvernia} alt='retrouso' className='imgList' />
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}

export default NavBar;
