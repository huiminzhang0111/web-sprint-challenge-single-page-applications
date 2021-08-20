import React, { useState } from "react";
import Order from './components/Order';
import Home from './components/Home'
import { Route, Link, Switch } from 'react-router-dom';
import Confirmation from "./components/Confirmation";


const App = () => {

  return (
    <div className='App'>
      <nav>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/help'>Help</Link>
          <Link to='/order'>Order</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path='/order'><Order /></Route>
        <Route exact path='/order/confirmation'><Confirmation /></Route>
        <Route path='/'><Home /></Route>
      </Switch>
    </div>
  );
};
export default App;
