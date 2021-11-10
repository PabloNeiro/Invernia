import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

function ButtonsSelectDrums({ setDrums }) {
  const goBack = () => window.history.back();
  return (
    <Col xs='12'>
      <Button variant='contained' onClick={() => setDrums(false)} color='primary'>
        GAITA
      </Button>
      <Button variant='contained' onClick={() => setDrums(true)} className='mx-3' color='warning'>
        PERCUSIÓN
      </Button>
      <Link className='btn btn-danger' onClick={() => goBack()}>
        VOLVER
      </Link>
    </Col>
  );
}

export default ButtonsSelectDrums;
