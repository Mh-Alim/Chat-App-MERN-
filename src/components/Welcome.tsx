import React from 'react'
import welcome_img from "../assets/images/chat.png"
const Welcome = () => {
  return (
      <div className='welcome_container'>
          <img src={welcome_img} alt="Welcome" />
          <p className='grey_font'>View and Text directly to the user present in the chat room</p>
      </div>
  )
}

export default Welcome