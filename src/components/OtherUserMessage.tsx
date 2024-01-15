import { useState } from "react";

type messageType = {
  senderName : string,
  content: string,
  time : Date
}
const OtherUserMessage = ({ senderName, content, time }: messageType) => {


  return (
    <div className="other_user_message">
      <p>{ senderName && senderName[0] }</p>
      <div>
        <p className="bold">{ senderName }</p>
        <p>{ content}</p>
        <p>{ JSON.stringify(time) }</p>
      </div>
    </div>
  )
}

export default OtherUserMessage