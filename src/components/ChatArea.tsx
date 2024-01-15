import "./MainContainer.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import OtherUserMessage from "./OtherUserMessage";
import MyMessage from "./MyMessage";
import { useSelector,useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {io} from "socket.io-client"
import { ToastCallError } from "./ReactToast";



type messageType = {
  message_id: string,
  content : string,
  sender_id : string,
  sender_name: string,
  createdAt: Date,
  
}
let socket: any;

const ChatArea = () => {

  const { chatId } = useParams();
  const [text,setText] = useState<string>("")
  const isDarkTheme: boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme);
  const sender: any = useAppSelector((state) => {
    return state.user
  }); 

  const [chats, setChats] = useState<Array<messageType>>([]);
  const [receiver, setReceiver] = useState<{ _id: string, name: string }>({_id:"",name:""})

  // to get all messages and other user details - for one to one chat
  useEffect(() => {
    setChats([])
  }, [chatId])
  
 
  useEffect(() => {
    
    const receiverDetails = async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/receiver-details`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chatId: chatId,
          sender
        })
      })
      const json = await res.json();
      console.log("json ",json)
      if (json.success) {
        if (!json.isGroupChat) setReceiver({ _id: json.receiver._id.toString(), name: json.receiver.name })
        else setReceiver({ _id: json.room._id.toString(), name: json.room.chatName });
      }
    }

    const fetchChats = async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/chat/all_chats`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chatId: chatId,
          sender
        })
      })
      const json = await res.json();
      console.log(json)
      if (json.success) {
        setChats(json.chats.map((message: any) => {
          return {
            message_id: message._id.toString(),
            content: message.content,
            sender_id: message.sender._id.toString(),
            sender_name: message.sender.name,
            createdAt : message.createdAt
          }
        }));
        
      }
    }
    
    fetchChats();
    receiverDetails();
  }, [chatId]);

  console.log("chats are : ",chats)
  useEffect(() => {
    socket = io("http://localhost:5000");

    socket.emit('joinRoom', chatId);
    socket.on('message_received', (message: any) => {
      setChats((prevMessages:any) => [...prevMessages,{
        message_id: message._id.toString(),
        content : message.content,
        sender_id: message.sender._id.toString(),
        sender_name: message.sender.name,
        createdAt : message.createdAt,
      }])
    })

    return () => {
      socket.emit('leaveRoom', chatId);
      socket.disconnect();
    }


  },[socket])

  const handleClick = () => {
    if (!text.trim()) {
      ToastCallError("Empty Fields")
      return;
    }

    socket.emit("sendMessage", text, sender._id, chatId);
    setText("")
  }

  return (
    <div className = {`chat_area_container ${isDarkTheme && `dark_bg`}`}  > 
      <div className={`chat_area_header ${ isDarkTheme && `dark_theme` }`}>
        <p className="chat_area_header_logo">{ receiver?.name?.charAt(0) }</p>
        <p className="chat_area_header_name">{ receiver?.name }</p>
          <p className="chat_area_header_time">time</p>
          <p className="chat_area_header_delete">
            <IconButton>
            <DeleteIcon className={ isDarkTheme ? "dark_theme" : "" } />
            </IconButton>
          </p>
      </div>
      <div className={`chat_area_message_box ${isDarkTheme && `dark_theme`}`}>
        {chats && chats.map(message => {
          if (message.sender_id === sender._id) return <MyMessage content= {message.content} time={message.createdAt} />
          return <OtherUserMessage senderName={message.sender_name} content= {message.content} time={message.createdAt} />
        })}
      </div>
      <div className={`chat_area_input ${isDarkTheme && `dark_theme`}`}>
        <textarea value={text} onChange={(e) => {setText(e.target.value)}} name="" id="" rows={2} placeholder="Type Your Text" className={ isDarkTheme ? "dark_theme" : ""} ></textarea>
        <div onClick={handleClick}>
          <IconButton>
            <SendIcon className={ isDarkTheme ? `dark_theme` : ""} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ChatArea