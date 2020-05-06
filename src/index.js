import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Page404 from './pages/404';
import Footer from './components/Footer';
import Menu from './components/Menu';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Redirect from="/home" to="/" />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route component={Page404} />
    </Switch>
    <Footer text="Copyright 20020" />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
