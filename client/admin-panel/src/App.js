import React from 'react';
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
