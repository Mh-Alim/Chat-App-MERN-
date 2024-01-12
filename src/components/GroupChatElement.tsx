import { useEffect } from "react";
import { useAppSelector } from "../app/hooks"
interface UserType {
  socket : any,
  data : {_id : string,name : string}
}
const GroupChatElement = ({ socket,data }: UserType) => {
  const myId : string = useAppSelector((state:any) => state.user._id)
  const isDarkTheme: boolean = useAppSelector((state: { toggleTheme: boolean }) => state.toggleTheme);

  const handleClick = () => {
    const otherUserId = data._id;
    console.log(myId, otherUserId);
    
  }
  return (
    <div onClick={handleClick} className={`user ${ isDarkTheme && `dark_theme` }`}>
        <p>{data.name && data.name[0]}</p>
        <p>{ data.name }</p>
    </div>
  )
}

export default GroupChatElement