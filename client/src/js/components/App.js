import React, { Component } from 'react';

import {Switch, Route, Redirect, Link} from 'react-router-dom';

import Signin from './Signin'
import Signup from './Signup';
import Group from './Group';
import MessageBoard from './MessageBoard';
import Home from './Home';


const App = () => {
    return (
        <div>
             <header>
          <div className="container">
            <div id="branding">
              <h1>
                <span className="highlight">PostIt &nbsp;
                </span>Messenger App</h1>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/user/signin'>Sign In</Link>
                </li>
                <li>
                  <Link to='/user/signup' >Sign Up</Link>
                </li>
                <li>
                  <Link to='/group' >Group</Link>
                </li>
                <li>
                  <Link to='/messageBoard' >MessageBoard</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <Switch>
          <Route exact path='/user/signup' component={Signup}/>
          <Route path='/user/signin' component={Signin}/>
          <Route path='/group' component={Group}/>
          <Route path='/messageBoard' component={MessageBoard}/>
          <Route path='/' component={Home}/>
        </Switch>
        <div className="container">
        <div className="container">
            
          </div>
            
          </div>

        <footer>
          <p>Andela, Copyright © 2017</p>
        </footer>
                  
        </div>
    )
}

export default App;