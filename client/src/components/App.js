import React, { Component } from 'react';

import {Switch, Route, Redirect, Link} from 'react-router-dom';

import Signin from './Signin'
import Signup from './Signup';


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
                  <a href>Home</a>
                </li>
                <li>
                  <Link to='/user/signin'>Sign In</Link>
                </li>
                <li>
                  <Link to='/user/signup' >Sign Up</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <img src="https://pbs.twimg.com/media/DASTsaoW0AA_rLW.jpg" />

        <Switch>
          <Route exact path='/user/signup' component={Signup}/>
          <Route path='/user/signin' component={Signin}/>
        </Switch>

        <footer>
          <p>Andela, Copyright © 2017</p>
        </footer>
            
         
       
        </div>
    )
}

export default App;