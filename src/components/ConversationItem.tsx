import "./MainContainer.css"
import { useNavigate } from "react-router-dom"

type propTypes = {
  logo : string,
  name: string,
  last_message: string,
  time : string
}

const ConversationItem = ({ logo, name, last_message, time }: propTypes) => {
  const navigate = useNavigate();
  return (
    <div className="conversation_element" onClick={() => navigate("/app/chat")} >
      <p className="conversation_element_logo">{logo}</p>
      <p className="conversation_element_name">{name}</p>
      <p className="conversation_element_last_message">{ last_message }</p>
      <p className="conversation_element_time">{time}</p>
    </div>
  )
}

export default ConversationItem