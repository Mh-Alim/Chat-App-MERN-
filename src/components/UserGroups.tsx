import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import chat_image from "../assets/images/chat.png";
import User from "./User";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppSelector } from "../app/hooks";
import { ToastCallError, ToastCallSuccess } from "./ReactToast";




let socket = io("http://localhost:5000");

const UserGroups = () => {

  let myId: string = useAppSelector((state: any) => state.user._id);

  const [users, setUsers] = useState<Array<{ _id: string, name: string }>>([]);
  
  const isDarkTheme: boolean = useSelector(
    (state: { toggleTheme: boolean }) => state.toggleTheme
  );

  useEffect(() => {
    const fetchAllUsers = async () => {
      const res: Response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL || ""}/user/users`
      );
      const jsonRes = await res.json();
      setUsers(jsonRes.users);
    };
    fetchAllUsers();

    socket.on("new_user", (userId: string, name: string) => {
      setUsers((prevUsers) => [...prevUsers, { _id: userId, name: name }]);
    });

    socket.on('add_user_fail', (message: string) => {
      ToastCallError(message)
    });

    socket.on('add_user_success', () => {
      ToastCallSuccess("Successfully added")
    });
    return () => {
      socket.off()
    }
  }, []);
  return (
    <div className={`user_groups_container ${isDarkTheme && "dark_bg"}`}>
      <div className={`user_groups_header ${isDarkTheme && "dark_theme"} `}>
        <img src={chat_image} alt="chat image" />
        <p>Online Users</p>
      </div>
      <div className={`search ${isDarkTheme && `dark_theme`}`}>
        <IconButton>
          <SearchIcon className={isDarkTheme ? "dark_theme" : ""} />
        </IconButton>
        <input
          type="text"
          placeholder="search"
          className={isDarkTheme ? "dark_theme" : ""}
        />
      </div>
      <div className={`user_groups_users ${isDarkTheme && `dark_bg`}`}>
        {users && users.map((user:{_id: string,name : string}) => (
          user._id !== myId ? <User socket={socket} key={user._id} data={user} /> : null 
        ))}
      </div>
    </div>
  );
};
export default UserGroups;
