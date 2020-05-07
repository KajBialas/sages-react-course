import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Page404 from './pages/404';
import Post from './pages/Post';
import Footer from './components/Footer';
import Menu from './components/Menu';

// import { COUNTER_INITIAL_STATE, COUNTER_ACTION_TYPES, counterReducer} from './Counter.reducer';

export const CounterContext = React.createContext(1);

function App() {
  const [ countContext, setCountContext] = useState(0);

  return(
    <CounterContext.Provider value={[countContext, setCountContext]}>
      <BrowserRouter>
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
    </CounterContext.Provider>
  )
}

export default App;