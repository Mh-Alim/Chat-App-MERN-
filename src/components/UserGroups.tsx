import { IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import chat_image from "../assets/images/chat.png"
import User from "./User";

const UserGroups = () => {
  return (
      <div className="user_groups_container">
          <div className="user_groups_header">
              <img src={chat_image} alt="chat image" />
              <p>Online Users</p>
          </div>
          <div className="search">
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder="search" />
          </div>
          <div className="user_groups_users">
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