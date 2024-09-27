import React from 'react'
import Firstpage from './Firstpage'
import Sidebar from '../components/Sidebar'
import UserList from '../components/UserList'
import Analytics from '../components/Analytics'
import UserForm from '../components/UserForm'
function Main() {
  return (
    <div>
      <Firstpage/>
      <div className="ok" style={{  display:'flex' }}>
      <Sidebar/>
      <UserList />
      <Analytics />
      </div>
    
    </div>
  )
}

export default Main
