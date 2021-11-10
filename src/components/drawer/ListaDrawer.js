import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box, Grid, Link } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import { drawerColor } from '../../utils/exports';

function ListaDrawer() {
  const marginTop = 2;
  const iconSong = (
    <ListItemIcon>
      <AlbumIcon />
    </ListItemIcon>
  );

  const listSong = [
    {
      name: 'MUIÑEIRAS',
      link: 'muiñeira',
    },
    {
      name: 'XOTAS',
      link: 'xota',
    },
    {
      name: 'PASODOBLES',
      link: 'pasodoble',
    },
    {
      name: 'FOLIADAS',
      link: 'foliada',
    },
    {
      name: 'RUMBAS',
      link: 'rumba',
    },
    {
      name: 'VALS',
      link: 'vals',
    },
  ];

  return (
    <div>
      <Box bgcolor={drawerColor}>
        <List component='nav'>
          {listSong.map((element, i) => (
            <Grid container>
              <Grid item xs={12}>
                {/* <Link color='inherit' underline='none' href={element.link}> */}
                <Link color='inherit' underline='none' href={`/repertorio/${element.link}`}>
                  <Box mt={marginTop}>
                    <ListItem>
                      {iconSong}
                      <ListItemText>{element.name}</ListItemText>
                    </ListItem>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          ))}
          <Grid container>
            <Grid item xs={12}>
              <Link color='inherit' underline='none' href='/repertorio'>
                <Box mt={marginTop}>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <AppsIcon />
                    </ListItemIcon>
                    <ListItemText>VER TODAS</ListItemText>
                  </ListItem>
                </Box>
              </Link>
              <Link color='inherit' underline='none' href='/'>
                <Box mt={marginTop}>
                  <ListItem>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>INICIO</ListItemText>
                  </ListItem>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </List>
      </Box>
    </div>
  );
}

export default ListaDrawer;
