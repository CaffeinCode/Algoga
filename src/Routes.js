import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Board from './components/Board.js';
import FindAlgo from './components/FindAlgo.js';
import Login from './components/Login.js';
import NavBar from './components/NavBar.js';

const Root = () => (
    <BrowserRouter>
    <NavBar/>
      <Route path="/findAlgo" component={FindAlgo}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/board" component={Board}></Route>
  </BrowserRouter>
);

export default Root;