import { useEffect } from "react";
import { useAppSelector } from "../app/hooks"
import { io } from "socket.io-client"
import { ToastCallError, ToastCallSuccess } from "./ReactToast";


interface UserType {
  data : {_id : string,chatName : string}
}

const GroupChatElement = ({ data }: UserType) => {
  const myId : string = useAppSelector((state:any) => state.user._id)
  const isDarkTheme: boolean = useAppSelector((state: { toggleTheme: boolean }) => state.toggleTheme);




  const handleClick = () => {
    const otherUserId = data._id;
    console.log(myId, otherUserId);
  }
  return (
    <div onClick={handleClick} className={`user ${ isDarkTheme && `dark_theme` }`}>
        <p>{data.chatName && data.chatName[0]}</p>
        <p>{ data.chatName }</p>
    </div>
  )
}

export default GroupChatElement