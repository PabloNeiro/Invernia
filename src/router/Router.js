import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OneSheet from '../components/common/OneSheet';
import Home from '../components/home/Home';
import Repertorio from '../components/repertorio/Repertorio';
import RepertorioSongs from '../components/repertorio/RepertorioSongs';

// import './router.css';

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/repertorio'>
        <Repertorio />
      </Route>
      <Route exact path='/partituras/:id'>
        <OneSheet />
      </Route>
      <Route exact path='/repertorio/:songs'>
        <RepertorioSongs />
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
