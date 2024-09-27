import React from 'react'
import Firstpage from './Firstpage'
import Sidebar from '../components/Sidebar'
import UserList from '../components/UserList'
import Analytics from '../components/Analytics'

function Main() {
  return (
    <div>
      <Firstpage/>
      <div className="ok" style={{  display:'flex',flexWrap: 'wrap',justifyContent: 'space-between', padding: '10px', }}>
      <Sidebar/>
      <UserList />
      <Analytics />
      </div>
    
    </div>
  )
}

export default Main
