import React, { Component } from 'react'
import axios from 'axios';

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Signin extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/user/signin', {email: this.email.value, password: this.password.value})
  }
   
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  render() {
    return (
      <div>
       {/* This is the SignIN form */}
        <section>
          <form onSubmit={this.handleSubmit} style={{border: '1px solid #ccc'}}>
          <div className="container">

            <label><b>Email</b></label>
            <input type="text" placeholder="Email" name="email" ref={(email) => this.email = email}   required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Password" name="password" ref={(password) => this.password = password}  required />
           
            {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
            <div className="clearfix">              
              <button type="submit" className="btn btn-primary">Sign In</button>
             
            </div>
          </div>
        </form>
      
        </section>

      </div>
    )
  }
}

export default Signin;