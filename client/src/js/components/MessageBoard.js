import React, {Component} from 'react';

class MessageBoard extends Component {
  render() {
    return (
      <div>
       <section id="showcase">
        <div id="messageArea" className="row">
          <div className="col-md-4" style={{color: 'black', textAlign: 'left'}}>
            <div className="well">
              <h3>Group name</h3>
              <ul id="users">
                <li>User 1</li>
                <li>User 2</li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="chat" id="chat" />
            <form id="messageForm">
              <div className="form-group">
                <label>Enter Message</label>
                <textarea className="form-control" id="message" defaultValue={"            \n          "} />
                <br />
                <input type="submit" className="btn btn-primary" defaultValue="Send Message" />
              </div>
            </form>
            <div className="jumbotron">
              <ul style={{color: 'black', textAlign: 'left'}}>
                <li>User 1: Hello i am user 1</li>
                <li>User 2: Hello i am user 2</li>
                <li>User 3: Hello i am user 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      </div>
    )
  }
}

export default MessageBoard;