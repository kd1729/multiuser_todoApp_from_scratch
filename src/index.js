import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './signuplogin.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import forgotPassword from "./Components/forgotPassword";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Signup" component={Welcome} />
      <Route path="/Login" component={Login} />
      <Route path="/forgotPassword" component={forgotPassword} />
    </Switch>
  </BrowserRouter >,
  document.getElementById('root')
);


