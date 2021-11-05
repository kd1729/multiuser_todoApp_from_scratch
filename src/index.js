import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './signuplogin.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from "./Components/Welcome";
import App from "./App";
import Login from "./Components/Login";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Signup" component={Welcome} />
      <Route path="/App" component={App} />
      <Route path="/Login" component={Login} />
    </Switch>
  </BrowserRouter >,
  document.getElementById('root')
);


