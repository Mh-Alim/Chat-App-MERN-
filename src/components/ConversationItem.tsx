import { useAppSelector } from "../app/hooks"
import "./MainContainer.css"
import { useNavigate } from "react-router-dom"

type propTypes = {
  chatId: string,
  logo : string,
  name: string,
  last_message: string,
  time: string,
}

const ConversationItem = ({  chatId, logo, name, last_message, time  }: propTypes) => {
  const navigate = useNavigate();
  const user: any = useAppSelector((state) => {
    return state.user
  });

  const setTime = (time: string) => {
    const dateObj = new Date(time);
    const getHour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();

    const currDateObj = new Date(Date.now());
    const currYear = currDateObj.getFullYear();
    const currMonth = currDateObj.getMonth();
    const currDate = currDateObj.getDate();

    if (currYear === year && currMonth === month && date === currDate) {
      return `${getHour}:${minutes}`;
    } 
    else if (currYear === year && currMonth === month && currDate - date === 1) {
      return "yesterday";
    }
    
    return `${date}/${month}/${year}`;
  }
  return (
    <div className="conversation_element" onClick={() => navigate(`/app/chat/${chatId}`)} >
      <p className="conversation_element_logo">{logo}</p>
      <p className="conversation_element_name">{name}</p>
      <p className="conversation_element_last_message">{ last_message }</p>
      <p className="conversation_element_time">{setTime(time)}</p>
    </div>
  )
}

export default ConversationItem