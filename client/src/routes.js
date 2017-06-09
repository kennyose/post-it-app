import React, {Component} from 'react';

import {Route, IndexRoute } from 'react-router';

import App  from './js/components/App'
import Signin from './js/components/Signin'
import Signup from './js/components/Signup';
import Group from './js/components/Group';
import MessageBoard from './js/components/MessageBoard';
import Home from './js/components/Home';

export default (
    <Route path="/" component ={Home}>
    <IndexRoute component={Signup} />
    <PublicRoute authed={this.state.authed} path='/user/signin' component={Signin} />
    <PublicRoute authed={this.state.authed} path='/user/signup' component={Signup} />   
    <PrivateRoute authed={this.state.authed} path='/messageBoard' component={MessageBoard} />
    <PrivateRoute authed={this.state.authed} path='/group' component={Group} />
    </Route>
)