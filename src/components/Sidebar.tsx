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
import { toggle } from "../features/toggleSlice";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../app/hooks";


type ConvType = {
  chat_id: string;
  name: string;
  lastMessage: string | undefined;
  date: string;
};
let socket: any;

const Sidebar = () => {
  const navigate = useNavigate();
  const isDarkTheme: boolean = useAppSelector(
    (state: any) => state.toggleTheme
  );

  const sbRefresh: boolean = useAppSelector((state: any) => state.sidebarRefresh);

  const dispatch = useAppDispatch();
  const [conversation, setConversation] = useState<Array<ConvType>>([]);

  let userId: string = useAppSelector((state: any) => state.user._id);
  useEffect(() => {
    socket = io("http://localhost:5000");


    socket.on(
      "add_user_sidebar",
      (
        chatId: string,
        user1: { _id: string; name: string },
        user2: { _id: string; name: string },
        date: string
      ) => {
        if (userId == user1._id) {
          setConversation((prev) => {
            if (prev)
              return [
                ...prev,
                {
                  chat_id: chatId,
                  name: user2.name,
                  lastMessage: undefined,
                  date,
                },
              ];
            return [
              ...conversation,
              {
                chat_id: chatId,
                name: user2.name,
                lastMessage: undefined,
                date,
              },
            ];
          });
        }
        if (userId == user2._id) {
          setConversation((prev) => {
            if (prev)
              return [
                ...prev,
                {
                  chat_id: chatId,
                  name: user1.name,
                  lastMessage: undefined,
                  date,
                },
              ];
            return [
              ...conversation,
              {
                chat_id: chatId,
                name: user1.name,
                lastMessage: undefined,
                date,
              },
            ];
          });
        }
      }
    );

    socket.on("new_gp", (gpId: string, groupName: string, date: string,adminId : string) => {
      if (JSON.stringify(userId) !== JSON.stringify(adminId)) return;
        setConversation((prev: any) => {
          if (prev)
            return [
              ...prev,
              { chat_id: gpId, name: groupName, lastMessage: undefined, date },
            ];
          return [
            ...conversation,
            { chat_id: gpId, name: groupName, lastMessage: undefined, date },
          ];
        });
      }
    );
    return () => {
      socket.disconnect();
    };
  }, [userId]);


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
    };

    fetchChats();
  }, [sbRefresh]);

  // get all conversation while rendering

  return (
    <div className={`sidebar ${isDarkTheme && `dark_bg`}`}>
      <div className={`sb_header ${isDarkTheme && `dark_theme`}`}>
        <IconButton color="default">
          <PersonOutlineIcon className={isDarkTheme ? `dark_theme` : ""} />
        </IconButton>

        <div>
          <IconButton onClick={() => navigate("/app/users")}>
            <PersonAddAltIcon className={isDarkTheme ? "dark_theme" : ""} />
          </IconButton>
          <IconButton onClick={() => navigate("/app/groups")}>
            <GroupAddIcon className={isDarkTheme ? "dark_theme" : ""} />
          </IconButton>
          <IconButton onClick={() => navigate("/app/create_group")}>
            <AddIcon className={isDarkTheme ? "dark_theme" : ""} />
          </IconButton>
          <IconButton onClick={() => dispatch(toggle())}>
            {isDarkTheme ? (
              <LightModeIcon className={isDarkTheme ? "dark_theme" : ""} />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </div>
      </div>

      <div className={`search ${isDarkTheme && "dark_theme"}`}>
        <IconButton>
          <SearchIcon className={isDarkTheme ? "dark_theme" : ""} />
        </IconButton>
        <input
          type="text"
          placeholder="search"
          className={isDarkTheme ? "dark_theme" : ""}
        />
      </div>

      <div className={`sb_conversation ${isDarkTheme && `dark_theme`}`}>
        {conversation &&
          conversation.map((conv: any) => (
            <ConversationItem
              chatId = {conv.chat_id}
              logo={conv.name && conv.name[0]}
              name={conv.name}
              last_message={
                conv.lastMessage ? conv.lastMessage : "Dont have chats"
              }
              time={conv.date}
              key = {conv.chat_id}
            />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
