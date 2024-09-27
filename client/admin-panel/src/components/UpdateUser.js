import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from './Navbar';
const UpdateUser = ({ onUserUpdated }) => {
  const [searchName, setSearchName] = useState("");
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isUserFound, setIsUserFound] = useState(false);

  const searchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;
      const user = users.find(
        (u) => u.name.toLowerCase() === searchName.toLowerCase()
      );

      if (user) {
        setUserId(user.id);
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
        setIsUserFound(true);
      } else {
        alert("User not found");
        setIsUserFound(false);
      }
    } catch (error) {
      console.error("Error searching for user:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, role };

    try {
      await axios.put(`http://localhost:3000/users/${userId}`, updatedUser);
      onUserUpdated();
      alert("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    
      <div>
        <Navbar/>
        <div className="ok" style={{  display:'flex',flexWrap: 'wrap', padding: '10px', }}>
        <Sidebar />
      
     <div>
     <h2>Update User</h2>
      <div>
        <label>Search User by Name:</label>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Enter user name"
          required
        />
        <button type="button" onClick={searchUser}>
          Search
        </button>
      </div>
      {isUserFound && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Role:</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
      )}
     </div>
     </div>
    </div>
  );
};

export default UpdateUser;
