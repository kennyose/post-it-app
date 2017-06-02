import React, {Component} from 'react';

class Signin extends Component {
  render() {
    return (
      <div>
       {/* This is the SignIN form */}
        <section>
          <form style={{border: '1px solid #ccc'}}>
          <div className="container">

            <label><b>Email</b></label>
            <input type="text" placeholder="Email" name="email" required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Password" name="psw" required />
           
            <div className="clearfix">              
              <button type="submit" className="signupbtn">Sign In</button>
             
            </div>
          </div>
        </form>
      
        </section>

      </div>
    )
  }
}

export default Signin;