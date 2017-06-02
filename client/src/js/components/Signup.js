import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                {/* This is the Signup form */}
                <section>
                <div>
        <h2>Signup Form</h2>
        <form style={{border: '1px solid #ccc'}}>
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
        <button type="button" className="cancelbtn">Sign Up with Google</button>
      </div>
        
      </section>

            </div>
        )
    }

}


export default Signup;