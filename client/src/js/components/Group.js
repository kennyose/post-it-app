import React, {Component} from 'react';

import { group } from '../authentication/authentication'

class Group extends Component {

    handleSubmit(e){
        e.preventDefault();
       var groupID = this.refs.group.value;
       console.log(groupID)
       group(groupID)
    

    }


  render() {
    return (
      <div>
       
      <section className="centralize">
          <p>Create a Group</p>
           <form onSubmit={this.handleSubmit.bind(this)}>
        
        <input type="text" name="groupname" ref= "group"/>
       
        
        <input type="submit" defaultValue="Create Group" />
      </form>

      
        </section>
         <section className="centralize">
          <p>Add Users to a Group</p>
           <form >
        
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