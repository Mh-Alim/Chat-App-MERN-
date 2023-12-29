import "./MainContainer.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import OtherUserMessage from "./OtherUserMessage";
import MyMessage from "./MyMessage";
import { useSelector,useDispatch } from "react-redux";

const ChatArea = () => {

  const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)

  return (
    <div className = {`chat_area_container ${isDarkTheme && `dark_bg`}`}  > 
      <div className={`chat_area_header ${ isDarkTheme && `dark_theme` }`}>
          <p className="chat_area_header_logo">T</p>
          <p className="chat_area_header_name">Alim</p>
          <p className="chat_area_header_time">time</p>
          <p className="chat_area_header_delete">
            <IconButton>
            <DeleteIcon className={ isDarkTheme ? "dark_theme" : "" } />
            </IconButton>
          </p>
      </div>
      <div className={`chat_area_message_box ${ isDarkTheme && `dark_theme`}`}>
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
      <div className={`chat_area_input ${isDarkTheme && `dark_theme`}`}>
        <textarea name="" id="" rows={2} placeholder="Type Your Text" className={ isDarkTheme ? "dark_theme" : ""} ></textarea>
        <div>
          <IconButton>
            <SendIcon className={ isDarkTheme ? `dark_theme` : ""} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ChatArea