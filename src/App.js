import React, { useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Page404 from './pages/404';
import Post from './pages/Post';
import Footer from './components/Footer';
import Menu from './components/Menu';

import { COUNTER_INITIAL_STATE, counterReducer} from './components/counter/Counter.reducer';

export const CounterContext = React.createContext(1);

function App() {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);
  const [userName, setUserName] = useState('');

  const [userNameForm, setUserNameForm] = useState('');

  return(
    <CounterContext.Provider value={[state, dispatch]}>
      <BrowserRouter>

        <div>
          <h2>Logowanie</h2>
          { userName ? <div>Użytkownik zalogowany</div> : <form onSubmit={() => setUserName(userNameForm)}>
            <input type="text" value={userNameForm} onChange={(e) => setUserNameForm(e.target.value)} />
          </form> }
        </div>


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