import { useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import chat_image from "../assets/images/chat.png";
import User from "./User";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppSelector } from "../app/hooks";
import { ToastCallError, ToastCallSuccess } from "./ReactToast";
import GroupChatElement from "./GroupChatElement";




let myId: string;
// const socket = io("http://localhost:5000")
const GroupChat = () => {

  myId = useAppSelector((state:any) => state.user._id)
  const [groups, setGroups] = useState<Array<{_id : string, name : string}>>([]);
  const isDarkTheme: boolean = useSelector(
    (state: { toggleTheme: boolean }) => state.toggleTheme
  );
    console.log(groups);
  useEffect(() => {
    // const fetchAllGroups = async () => {
    //   const res: Response = await fetch(
    //     `${process.env.REACT_APP_BACKEND_URL || ""}/chat/groups`
    //   );
    //   const jsonRes = await res.json();
    //   setGroups(jsonRes.groups);
    // };
    // fetchAllGroups();

    // establishing socket connection
    
    // socket.on("group_created", (gpId: string, gpName: string) => {
    //   console.log("gp crshfd");
    //   setGroups((prevGp) => [...prevGp, { _id: gpId, name: gpName }]);
    // })
    // return () => {
    //   socket.off()
    // }
    // myId = 
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
        {/* {groups && groups.map((group:{_id: string,name : string}) => (
          <GroupChatElement socket={socket} key={group._id} data={group} /> 
        ))} */}
      </div>
    </div>
  );
};
// export {socket}
export default GroupChat;
