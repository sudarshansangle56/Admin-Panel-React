import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import UserList from './components/UserList';
// import Analytics from './components/Analytics';
// import UserForm from './components/UserForm'
// import Sidebar from './components/Sidebar';
// import Firstpage from './pages/Firstpage';
import UpdateUser from './components/UpdateUser';
import CreateUser from './components/CreateUser';
import DeleteUser from './components/DeleteUser';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
 
  const handleUserDeleted = () => {
    alert('User deleted successfully!');
    // Refresh the user list after deletion
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/DeleteUser" element={ <DeleteUser onUserDeleted={handleUserDeleted} />} />
          <Route path="/UpdateUser" element={<UpdateUser />} />
          <Route path="/CreateUser" element={<CreateUser />} />
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;
