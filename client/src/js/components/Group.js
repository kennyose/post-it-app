import React, {Component} from 'react';

class Group extends Component {
  render() {
    return (
      <div>
       
        <section>
        	<p>Welcome to the Group Page</p>
           <form className="centralize">
        Group Name:<br />
        <input type="text" name="groupname" defaultValue="Andela" />
        <br />
        Add Members:<br />
        <input type="text" name="Add member" defaultValue="User 1" />
        <br /><br />
        <input type="submit" defaultValue="Create Group" />
      </form>
          <div className="container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2db2pFtYCrUNoFs2B4vTvlhZ_QceMzosrPowj5H8L8gh7i1g8" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2db2pFtYCrUNoFs2B4vTvlhZ_QceMzosrPowj5H8L8gh7i1g8" />
            
          </div>
        </section>

      </div>
    )
  }
}

export default Group;