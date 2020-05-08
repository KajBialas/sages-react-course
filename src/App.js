import React, { useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Page404 from './pages/404';
import Post from './pages/Post';
import Footer from './components/Footer';
import Menu from './components/Menu';
import UserLogin from './components/userLogin/UserLogin.component';

import { COUNTER_INITIAL_STATE, counterReducer} from './components/counter/Counter.reducer';

import {UserContext, CounterContext} from './contexts/context';

function App() {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);
  const [userName, setUserName] = useState('');

  return(
    <CounterContext.Provider value={[state, dispatch]}>
      <UserContext.Provider value={[userName, setUserName]}>
        <BrowserRouter>
          <UserLogin />
          <Menu />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/post/:id" component={Post} />
            <Route component={Page404} />
          </Switch>
          <Footer text="Copyright 20020" />
        </BrowserRouter>
      </UserContext.Provider>
    </CounterContext.Provider>
  )
}

export default App;