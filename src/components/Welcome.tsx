import React from 'react'
import { useSelector } from 'react-redux'
import welcome_img from "../assets/images/chat.png"
const Welcome = () => {
  const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)
  return (
      <div className={`welcome_container ${isDarkTheme && `dark_bg`}`}>
          <img src={welcome_img} alt="Welcome" />
          <p className={`grey_font ${ isDarkTheme && `dark_bg`}`}>View and Text directly to the user present in the chat room</p>
      </div>
  )
}

export default Welcome