// Creating users table with editing & deleting buttons
import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* Checking users data content */}
      {props.users.length > 0 ? (
        /* Listing users data array */
        props.users.map((user, index) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button className="button muted-button">Edit</button>
                {/* Fns must be called inside an arrow fn to avoid being called automatically */}
                <button
                  className="button muted-button"
                  onClick={() => {
                    props.delUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={3}>No Users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
