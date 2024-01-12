import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./MainContainer.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddIcon from "@mui/icons-material/Add";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItem from "./ConversationItem";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import {toggle} from "../features/toggleSlice"
import { io } from "socket.io-client";


type ConvType = {
  _id: string,
  name: string,
  lastMessage : string | undefined,
  month: number,
  day: number,
  year : number,
  hours: number,
  min : number

  
}
let socket = io("http://localhost:5000");

const Sidebar = () => {
  const navigate = useNavigate();
  const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)
  const dispatch = useDispatch();
  const [conversation, setConversation] = useState<Array<ConvType>>([])


  useEffect(() => {
    socket.on('add_user_success', (_id: string, name: string, month: number,year: number, day: number, hours: number, min: number) => {
      console.log("add user success")
      setConversation((prevConv) => [...prevConv, { _id, name,lastMessage: undefined, month,year, day, hours, min }])
    })
  }, []);


  useEffect(() => {

    const fetchChats = async () => {
      const token: string | null = localStorage.getItem("authToken");
      const res: Response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL || ""}/chat/chat-rooms`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const jsonRes = await res.json();
      setConversation(jsonRes.chatRooms);
    }
      
    fetchChats()
  },[])


  // get all conversation while rendering


  return (
    <div className={`sidebar ${ isDarkTheme && `dark_bg`}`}>
      <div className= {`sb_header ${isDarkTheme && `dark_theme`}`}>
        <IconButton color="default">
          <PersonOutlineIcon className={ isDarkTheme ?  `dark_theme` : ""} />
        </IconButton>

        <div>
          <IconButton onClick={() => navigate("/app/users")}>
            <PersonAddAltIcon className = { isDarkTheme ? "dark_theme" : ""} />
          </IconButton>
          <IconButton onClick={() => navigate("/app/groups")}>
            <GroupAddIcon className= { isDarkTheme ? "dark_theme" : ""} />
          </IconButton>
          <IconButton onClick={() => navigate("/app/create_group")}>
            <AddIcon className= { isDarkTheme ? "dark_theme" : ""} />
          </IconButton>
          <IconButton onClick={() => dispatch(toggle())}>
            {isDarkTheme ? (
              <LightModeIcon className= { isDarkTheme ? "dark_theme" : ""} />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </div>
      </div>

      <div className= {`search ${ isDarkTheme && "dark_theme"}`}>
        <IconButton>
          <SearchIcon className= {isDarkTheme ? "dark_theme" : ""} />
        </IconButton>
        <input type="text" placeholder="search" className= {isDarkTheme ? "dark_theme" : ""} />
      </div>

      <div className={`sb_conversation ${isDarkTheme && `dark_theme`}`}>
        {conversation && conversation.map((conv: any) => (
          <ConversationItem
          logo= {conv.name && conv.name[0]}
          name={conv.name}
          last_message={conv.lastMessage ? conv.lastMessage : "Dont have chats"}
          time={`${conv.day}/${conv.month}/${conv.year}`}
        />
        ))}
        
        
      </div>
    </div>
  );
};

export default Sidebar;
