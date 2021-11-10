import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core';
import atril from './atril.jpg';

function NoSheet({ instrument }) {
  return (
    <Card className='text-center mt-4'>
      <Typography variant='h6'>A partitura de {instrument} non está dispoñible</Typography>
      <CardMedia component='img' alt='Retrouso' height='90%' image={atril} />
    </Card>
  );
}

export default NoSheet;
