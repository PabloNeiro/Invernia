import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Drawer, Divider, CssBaseline, Box, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import ListaDrawer from '../drawer/ListaDrawer';
import TableList from './TableList';
import { drawerColor } from '../../utils/exports';
import '../../utils/repertorio.css';
import { useParams } from 'react-router';
import { songsList } from '../../database/database';
const drawerWidth = 240;

function RepertorioSongs(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [list, setList] = React.useState(songsList);
  const [title, setTitle] = React.useState();
  let { songs } = useParams();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <ListaDrawer />
    </div>
  );
  const filterSong = () => {
    const filterList = songsList.filter(function (value) {
      return value.type === songs;
    });
    setList(filterList);
  };

  useEffect(() => {
    filterSong();
    filterName();
  }, []);

  const filterName = () => {
    songs === 'muiñeira'
      ? setTitle('Muiñeiras')
      : songs === 'pasodoble'
      ? setTitle('Pasodobles')
      : songs === 'xota'
      ? setTitle('Xotas')
      : songs === 'rumba'
      ? setTitle('Rumbas')
      : songs === 'foliada'
      ? setTitle('Foliadas')
      : songs === 'vals'
      ? setTitle('Vals')
      : setTitle('Repertorio');
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box bgcolor={drawerColor} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className='bgNavbar'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <TableList lista={list} />
      </Box>
    </Box>
  );
}

RepertorioSongs.propTypes = {
  window: PropTypes.func,
};

export default RepertorioSongs;
