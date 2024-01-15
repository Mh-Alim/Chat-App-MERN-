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
  return (
    <div className="conversation_element" onClick={() => navigate(`/app/chat/${chatId}`)} >
      <p className="conversation_element_logo">{logo}</p>
      <p className="conversation_element_name">{name}</p>
      <p className="conversation_element_last_message">{ last_message }</p>
      <p className="conversation_element_time">{time}</p>
    </div>
  )
}

export default ConversationItem