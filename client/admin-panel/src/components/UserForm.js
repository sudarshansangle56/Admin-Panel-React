import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ userData, onFormSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
      setRole(userData.role);
    }
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, role };

    try {
      if (userData) {
        // Update existing user
        await axios.put(`http://localhost:3000/users/${userData.id}`, user);
      } else {
        // Create new user
        await axios.post('http://localhost:3000/users', user);
      }
      onFormSubmit(); // Callback to refresh user list or perform other actions
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <div>
      <h2>{userData ? 'Edit User' : 'Add User'}</h2>
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
        <button type="submit">{userData ? 'Update' : 'Create'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
