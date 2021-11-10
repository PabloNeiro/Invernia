import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import inverniaStyles from './inverniaStyles';
import inverniaImg from './inverniaImg.jpg';
import './home.css';
import { Button } from 'reactstrap';

function InverniaCard() {
  const classes = inverniaStyles();
  return (
    <Card className={classes.rootXs}>
      <CardActionArea>
        <CardMedia className={classes.mediaXs} image={inverniaImg} title='Contemplative Reptile' />
        <CardContent className='backContent'>
          <Button style={{ bgColor: '#aaa' }} href='/repertorio'>
            REPERTORIO
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InverniaCard;
