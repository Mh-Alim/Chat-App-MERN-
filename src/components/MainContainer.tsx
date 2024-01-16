import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./MainContainer.css"
import Sidebar from './Sidebar'

const MainContainer = () => {
  const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)
  return (
    <div className={`main_container ${isDarkTheme && `dark_bg`}`}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default MainContainer