import React, {Component} from 'react';

class Group extends Component {
  render() {
    return (
      <div>
       
      <section className="centralize">
          <p>Create a Group</p>
           <form>
        Group Name:<br />
        <input type="text" name="groupname"/>
        <br />
        Add Members:<br />
        <input type="submit" defaultValue="Create Group" />
      </form>

      
        </section>
         <section className="centralize">
          <p>Add Users to a Group</p>
           <form>
        Group Name:<br />
        <input type="text" name="groupname"/>
        <br />
        User Name:<br />
        <input type="text" name="Add member" defaultValue="User 1" />
        <br /><br />
        <input type="submit" defaultValue="Add User" />
      </form>
        
        </section>

      </div>
    )
  }
}

export default Group;