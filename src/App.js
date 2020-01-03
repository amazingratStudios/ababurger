import React from 'react';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Order from './pages/Order';
import Authenticate from './pages/Authenticate';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router source="/ababurger">
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/ababurger/" exact component={Main}/>
          <Route path="/ababurger/order" component={Order}/>
          <Route path="/ababurger/admin" exact component={Authenticate} />
          <Route path="/ababurger/dashboard" component={Dashboard} />
          <Route path="/ababurger/gallery" component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
