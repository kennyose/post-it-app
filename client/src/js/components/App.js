import React, { Component } from 'react';

import {Switch, Route, Redirect, Link} from 'react-router-dom';

import Signin from './Signin'
import Signup from './Signup';
import Group from './Group';
import MessageBoard from './MessageBoard';
import Home from './Home';
import { logout } from '../authentication/authentication'
import { firebaseAuth } from '../firebase/firebase'



function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/user/signin', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/messageBoard' />}
    />
  )
}

class App extends Component  {
   state = {
    authed: false,
    loading: true,
  }
  componentDidMount ()  {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  render() {

    return this.state.loading === true ? <h1>Loading</h1> : (
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
                  <Link to='/mesageBoard'>MessageBoard</Link>
                </li>
                <li>
                  <Link to='/group' >Group</Link>
                </li>

                
                <li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/user/signin" className="navbar-brand">Sign In</Link>
                        <Link to="/user/signup" className="navbar-brand">Sign Up</Link>                    
                      </span>}
                </li>                
              </ul>
            </nav>
            
          </div>
        </header>

        <Switch>
            <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/user/signin' component={Signin} />
                <PublicRoute authed={this.state.authed} path='/user/signup' component={Signup} />
                <PrivateRoute authed={this.state.authed} path='/messageBoard' component={MessageBoard} />
                <Route render={() => <h3>No sf</h3>} />
          
        </Switch>
        
     <footer>
          <p>Andela, Copyright © 2017</p>
        </footer>
                  
        </div>
    )

  }
    
}

export default App;