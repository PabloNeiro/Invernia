import { Container } from '@mui/material';
import React from 'react';
import NavBar from '../navbar/NavBar';
import InverniaCard from './InverniaCard';
import './home.css';
import NewsCard from './NewsCard';

function Home() {
  return (
    <>
      <NavBar />
      <Container className='backContainer'>
        <NewsCard />
        <InverniaCard />
      </Container>
    </>
  );
}

export default Home;
