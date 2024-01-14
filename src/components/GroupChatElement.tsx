import { useAppSelector } from "../app/hooks"


interface UserType {
  socket : any,
  data : {_id : string,chatName : string}
}

const GroupChatElement = ({ socket, data }: UserType) => {
  const myId : string  = useAppSelector((state:any) => state.user._id)
  const isDarkTheme: boolean = useAppSelector((state: { toggleTheme: boolean }) => state.toggleTheme);




  const handleClick = () => {
    const gpId: string = data._id;
    console.log(myId, gpId);

    socket.emit('add_gp_to_sidebar',myId,gpId);
  }
  return (
    <div onClick={handleClick} className={`user ${ isDarkTheme && `dark_theme` }`}>
        <p>{data.chatName && data.chatName[0]}</p>
        <p>{ data.chatName }</p>
    </div>
  )
}

export default GroupChatElement