import React from 'react'
import { Outlet } from 'react-router-dom'
import "./MainContainer.css"

import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroup from './CreateGroup'
import Login from './Login'
import UserGroups from './UserGroups'

const MainContainer = () => {
  return (
    <div className='main_container'>
      <Sidebar />
      {/* <ChatArea /> */}
      {/* <Welcome /> */}
      {/* <CreateGroup /> */}
      {/* <Login /> */}
      {/* <UserGroups /> */}
      <Outlet />
    </div>
  )
}

export default MainContainer