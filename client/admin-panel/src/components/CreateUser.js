import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Cuser.css'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const CreateUser = ({ onUserCreated }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, role };

    try {
      await axios.post('http://localhost:3000/users', newUser);
      onUserCreated(); // Callback to refresh user list or perform other actions
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>

   <Navbar/>
    <div className='ok' style={{ display:'flex',flexWrap: 'wrap', padding: '10px',}}>
        <div> <Sidebar/></div>
       
        <div><h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <button type="submit">Create</button>
      </form></div>
      
    </div>
    </div>
  );
};

export default CreateUser;
