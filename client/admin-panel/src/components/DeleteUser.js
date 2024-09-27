import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = ({ onUserDeleted }) => {
  const [name, setName] = useState('');

  const handleDelete = async () => {
    const confirmed = window.confirm(`Are you sure you want to delete the user with the name: ${name}?`);
    if (confirmed) {
      try {
        // Fetch the user by name first
        const response = await axios.get(`http://localhost:3000/users?name=${name}`);
        const user = response.data[0]; // Assuming user data is returned as an array

        if (user) {
          // Delete the user if found
          await axios.delete(`http://localhost:3000/users/${user.id}`);
          onUserDeleted(); // Callback to refresh the user list or perform other actions
          alert(`User ${name} has been deleted.`);
        } else {
          alert('User not found!');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
