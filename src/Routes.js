import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Board from './pages/Board.js';
import FindAlgo from './pages/FindAlgo.js';
import Login from './pages/Login.js';
import NavBar from './pages/NavBar.js';

const Root = () => (
    <BrowserRouter>
    <NavBar/>
      <Route path="/findAlgo" component={FindAlgo}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/board" component={Board}></Route>
  </BrowserRouter>
);

export default Root;