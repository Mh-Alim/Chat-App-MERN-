import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

const Sidebar = () => {
  const navigate = useNavigate();
  const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)
  const dispatch = useDispatch();
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
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="B"
          name="Bald"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="T"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="B"
          name="Bald"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="T"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="B"
          name="Bald"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="T"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="B"
          name="Bald"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="T"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
        <ConversationItem
          logo="A"
          name="Alim"
          last_message="Last Message"
          time="time"
        />
      </div>
    </div>
  );
};

export default Sidebar;
