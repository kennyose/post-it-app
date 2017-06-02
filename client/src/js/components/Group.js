import React, {Component} from 'react';

class Group extends Component {
  render() {
    return (
      <div>
       
      <section className="centralize">
          <p>Create a Group</p>
           <form>
        
        <input type="text" name="groupname" defaultValue="Group Name" />
       
        
        <input type="submit" defaultValue="Create Group" />
      </form>

      
        </section>
         <section className="centralize">
          <p>Add Users to a Group</p>
           <form>
        
        <input type="text" name="groupname" defaultValue="Group Name" />
     
        
        <input type="text" name="Add member" defaultValue="Add User" />
      
        <input type="submit" defaultValue="Add User" />
      </form>
        
        </section>

      </div>
    )
  }
}

export default Group;