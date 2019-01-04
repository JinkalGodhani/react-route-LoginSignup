import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import validator from 'validator';
import {Login} from './Login';
import {Signup} from './Signup';

export function LoginSignup() {
  return(
    <Router>
      <div className="container">
      <nav className="navbar">
        <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
          </nav>
        <hr />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
      </div>
    </Router>
  );
}

function login() {
  return(
    <Login />
  );
}

function signup() {
  return(
    <Signup />
  );
}
