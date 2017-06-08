import React, {Component} from 'react';

class Routes extends Component {
  render() {
    return (
          <Switch>
            <Route path='/' exact component={Home} />
                <IndexRoute component={LoginPage} />
                <PublicRoute authed={this.state.authed} path='/user/signin' component={Signin} />
                <PublicRoute authed={this.state.authed} path='/user/signup' component={Signup} />
                <Route path="/dashboard" component={UserDashBoard} />
                <Route path="/admindashboard" component={UserDashBoard} />
                <Route path="/create-document" component={CreateDocument} />
                <Route path="/edit-document/:id" component={EditDocument} />
                <Route path="/view-document/:id" component={ViewDocument} />
                <Route path="/create-role" component={CreateRole} />
                <Route path="/users" component={ViewAllUsers} />
                <Route path="/roles" component={ViewAllRoles} />
                <Route path="/about" component={About} />      
                <PrivateRoute authed={this.state.authed} path='/messageBoard' component={MessageBoard} />
                <PrivateRoute authed={this.state.authed} path='/group' component={Group} />
                <Route render={() => <h3>You must be Logged In to see this page</h3>} />
          
        </Switch>
  
    )
  }
}

export default Routes;