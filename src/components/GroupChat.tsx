import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import chat_image from "../assets/images/chat.png";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import GroupChatElement from "./GroupChatElement";
import { ToastCallError, ToastCallSuccess } from "./ReactToast";
import {refreshFunction} from "../features/refreshSlice"
import { useAppDispatch } from "../app/hooks";




let socket:any;
const GroupChat = () => {

  
  const [groups, setGroups] = useState<Array<{_id : string, chatName : string}>>([]);
  const isDarkTheme: boolean = useSelector(
    (state: { toggleTheme: boolean }) => state.toggleTheme
  );
  const dispatch = useAppDispatch();



  useEffect(() => { 
    socket = io("http://localhost:5000");

    socket.on('new_gp', (gpId: string, gpName: string) => {
      console.log("new gp");
      console.log(gpId, gpName);
      setGroups((prevGp) => [...prevGp, { chatName: gpName, _id: gpId }]);
    });


    // To add Group to the sidebar
    socket.on("add_gp_to_sidebar_success", () => {
      console.log("coming to group added ");
      ToastCallSuccess("Group added successfully");
      dispatch(refreshFunction());
    });

    socket.on("add_gp_to_sidebar_fail", (message: string) => {
      ToastCallError(message);
    });

    return () => {
      socket.disconnect();
    }

  }, []);
  useEffect(() => {

    const fetchAllGroups = async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/chat/groups`);
      const json = await res.json();

      setGroups(json.groups);
    }
    fetchAllGroups();
  }, []);
  return (
    <div className={`user_groups_container ${isDarkTheme && "dark_bg"}`}>
      <div className={`user_groups_header ${isDarkTheme && "dark_theme"} `}>
        <img src={chat_image} alt="chat image" />
        <p>Available Groups</p>
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
        {groups && groups.map((group: { _id: string, chatName: string }) => (
          <GroupChatElement key={group._id} socket={socket} data={group} /> 
        ))}
      </div>
    </div>
  );
};
export default GroupChat;
