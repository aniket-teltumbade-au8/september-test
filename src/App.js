import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import  HomePage  from './pages/HomePage';
import { NavMenu } from './components/NavMenu';
import Calculator from './pages/Calculator';
import Register from './pages/Register';
import  Gallery  from './pages/Gallery';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/gallery' component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
