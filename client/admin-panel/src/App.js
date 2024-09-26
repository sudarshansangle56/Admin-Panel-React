import React from 'react';
import UserList from './components/UserList';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <UserList />
      <Analytics />
    </div>
  );
}

export default App;
