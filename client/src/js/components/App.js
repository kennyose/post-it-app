import React, { Component } from 'react';

import {Switch, Route, Redirect, Link} from 'react-router-dom';

import Signin from './Signin'
import Signup from './Signup';
import Group from './Group';


const App = () => {
    return (
        <div>
             <header>
          <div className="container">
            <div id="branding">
              <h1>
                <span className="highlight">PostIt 
                </span>Meseenger App</h1>
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
              </ul>
            </nav>
          </div>
        </header>

        <Switch>
          <Route exact path='/user/signup' component={Signup}/>
          <Route path='/user/signin' component={Signin}/>
          <Route path='/group' component={Group}/>
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