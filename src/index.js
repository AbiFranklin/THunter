import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import HeroSlider from './Componenets/Slider'
import Gallery from './Componenets/Gallery'
import Classes from './Componenets/Classes'
import Shop from './Componenets/Shop'
import Sessions from './Componenets/Sessions'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

ReactDOM.render(
    <Router>
    <Switch>
      <Route exact path="/" component={HeroSlider}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/shop" component={Shop}/>
      <Route path="/sessions" component={Sessions}/>
      <Route path="/classes" component={Classes}/>
    </Switch>
  </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
