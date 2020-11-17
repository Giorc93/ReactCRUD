import React, { useState } from "react";
import UserTable from "./components/userTable";
import AddUserForm from "./components/addUserForm";
// UUID generates random ids
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];
  // Creating state for users
  const [users, setUsers] = useState(usersData);
  // Creating add user fn
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...usersData, user]);
  };

  const delUser = (id) => {
    // Filtering data. Every element with different id gets saved. .filter returns an array
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {/* Sending users data as prop*/}
          <UserTable users={users} delUser={delUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
