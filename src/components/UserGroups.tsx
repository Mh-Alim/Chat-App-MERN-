import { useSelector } from "react-redux";

import { IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import chat_image from "../assets/images/chat.png"
import User from "./User";

const UserGroups = () => {
    const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)
  return (
      <div className={`user_groups_container ${ isDarkTheme && "dark_bg"}`}>
          <div className={`user_groups_header ${isDarkTheme &&  "dark_theme" } `}>
              <img src={chat_image} alt="chat image" />
              <p>Online Users</p>
          </div>
          <div className= {`search ${ isDarkTheme && `dark_theme`}`}>
                <IconButton >
                    <SearchIcon className={isDarkTheme ? "dark_theme": ""} />
                </IconButton>
                <input type="text" placeholder="search" className={isDarkTheme ? "dark_theme": ""} />
          </div>
          <div className={`user_groups_users ${isDarkTheme && `dark_bg`}`}>
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
          </div>
    </div>
  )
}

export default UserGroups