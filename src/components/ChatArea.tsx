import "./MainContainer.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import OtherUserMessage from "./OtherUserMessage";
import MyMessage from "./MyMessage";

const ChatArea = () => {
  return (
    <div className='chat_area_container'> 
      <div className="chat_area_header">
          <p className="chat_area_header_logo">T</p>
          <p className="chat_area_header_name">Alim</p>
          <p className="chat_area_header_time">time</p>
          <p className="chat_area_header_delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </p>
      </div>
      <div className="chat_area_message_box">
        <OtherUserMessage />
        <MyMessage />
        <OtherUserMessage />
        <MyMessage />
        <OtherUserMessage />
        <OtherUserMessage />
        <MyMessage />
        <OtherUserMessage />
        <OtherUserMessage />
        <MyMessage />
        <OtherUserMessage />
        <OtherUserMessage />
        <MyMessage />
        <OtherUserMessage />
        <OtherUserMessage />
        <MyMessage />
        <OtherUserMessage />
      </div>
      <div className="chat_area_input">
        <textarea name="" id="" rows={2} placeholder="Type Your Text" ></textarea>
        <div>
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ChatArea