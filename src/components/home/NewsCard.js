import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import inverniaStyles from './inverniaStyles';
import axenda from './axenda.jpg';
import './home.css';
import { Button } from 'reactstrap';

function NewsCard() {
  const classes = inverniaStyles();
  return (
    <Card className={classes.rootXs}>
      <CardActionArea>
        <CardMedia className={classes.mediaXs} image={axenda} title='Contemplative Reptile' />
        <CardContent className='backContent'>
          {/* <Button style={{ bgColor: '#aaa' }} href='/repertorio'> */}
          <Button>Axenda</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsCard;
