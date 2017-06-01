import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                {/*Signup form*/}
                <section id="showcase">
        <div id="signupbox" style={{marginTop: 50}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">Sign Up</div>
              <div style={{float: 'right', fontSize: '85%', position: 'relative', top: '-10px'}}><a id="signinlink" href="#">Sign In</a></div>
            </div>  
            <div className="panel-body">
              <form id="signupform" className="form-horizontal" role="form">
                <div id="signupalert" style={{display: 'none'}} className="alert alert-danger">
                  <p>Error:</p>
                  <span />
                </div>
                <div className="form-group">
                  <label htmlFor="firstname" className="col-md-3 control-label">Username</label>
                  <div className="col-md-9">
                    <input type="text" className="form-control" name="firstname" placeholder="First Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-md-3 control-label">Email</label>
                  <div className="col-md-9">
                    <input type="text" className="form-control" name="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="col-md-3 control-label">Password</label>
                  <div className="col-md-9">
                    <input type="password" className="form-control" name="passwd" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="icode" className="col-md-3 control-label">Confirm Password</label>
                  <div className="col-md-9">
                    <input type="text" className="form-control" name="icode" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  {/* Button */}                                        
                  <div className="col-md-offset-3 col-md-9">
                    <button id="btn-signup" type="button" className="btn btn-info"><i className="icon-hand-right" /> &nbsp; Sign Up</button>
                    <span style={{marginLeft: 8}}>or</span>  
                  </div>
                </div>
                <div style={{borderTop: '1px solid #999', paddingTop: 20}} className="form-group">
                  <div className="col-md-offset-3 col-md-9">
                    <button id="btn-fbsignup" type="button" className="btn btn-danger"><i className="icon-google" />Sign Up with Google</button>
                  </div>                                           
                </div>
              </form>
            </div>
          </div>
        </div> 
      </section>

            </div>
        )
    }

}


export default Signup;