// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Friends from './Components/Friends/Friends';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Header from './Components/Header/Header';
// import Friend from './Components/Friend/Friend';
import Frienddiv from './Components/Frienddiv/Frienddiv';
import Button from './Components/Button/Button';

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* link header nav */}
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendid">
            <Frienddiv></Frienddiv>
          </Route>
          <Route exact path="/button/:btnname">
            <Button></Button>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

export default App;
