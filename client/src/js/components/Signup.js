import React, { Component } from 'react';
import axios from 'axios';


function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

class Signup extends Component {

  state = { registerError: null }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/user/signup', {username:this.username.value, email: this.email.value, password: this.password.value} )
    alert("Welcome to PostIt " + this.username.value)
  
  }

    render() {
        return (
            <div>
                {/* This is the Signup form */}
                <section>
                <div>
        <h2>Signup Form</h2>
        <form onSubmit={this.handleSubmit} style={{border: '1px solid #ccc'}}>
          <div className="container">

            <label><b>Username</b></label>
            <input type="text" placeholder="Username" name="username" ref={(username) => this.username = username} required/>

            <label><b>Email</b></label>
            <input type="text" placeholder="Email" name="email" ref={(email) => this.email = email} required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Password" name="psw" ref={(password) => this.password = password} required/>
           
             {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
            <div className="clearfix">              
              <button type="submit"  className="btn btn-primary">Sign Up</button>
              
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