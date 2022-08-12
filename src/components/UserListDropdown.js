import React from "react";

const UserListDropdown = (props) =>{

    const dropdownChangeHandler = (event) => {
        props.onDropdwonChange(event.target.value);
      };
    return(
    <div className="project-workpack-dropdown">
      <div className="project-workpack-dropdown__control">
        <label>Select User</label>
        <select
          onChange={dropdownChangeHandler}
        >
          {props.listUsers.map ((user) => <option key= {user.id} value={user.id}>{user.id} {user.username}</option>) }
         
        </select>
      </div>
    </div>
    )

} 

export default UserListDropdown