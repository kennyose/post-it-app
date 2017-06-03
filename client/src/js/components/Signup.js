import React, { Component } from 'react';

import { emailSignup } from '../actions/AppActions';

class Signup extends Component {
   constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };


    this.submitForm = (e) => {
      e.preventDefault();
      var username = this.state.username;
      var email = this.state.email;
      var password = this.state.password;
      this.props.dispatch(emailSignup(username, email, password));
      console.log('Email Signup!')
    }

    this.setUserName = (e) => {
      this.setState({
        username: e.target.value
      });
    }

    this.setEmail = (e) => {
      this.setState({
        email: e.target.value
      })
    }

    this.setPassword = (e) => {
      this.setState({
        password: e.target.value
      })
    }
  }

    render() {
        return (
            <div>
                {/* This is the Signup form */}
                <section>
                <div>
        <h2>Signup Form</h2>
        <form onSubmit={ this.submitForm } style={{border: '1px solid #ccc'}}>
          <div className="container">

            <label><b>Username</b></label>
            <input type="text" placeholder="Username" name="username" required />

            <label><b>Email</b></label>
            <input type="text" placeholder="Email" name="email" required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Password" name="psw" required />
           
            <div className="clearfix">              
              <button type="submit" className="signupbtn">Sign Up</button>
              
            </div>
          </div>
        </form>
        
      </div>
        
      </section>

            </div>
        )
    }

}


export default Signup;