import { useEffect, useRef } from "react";
import { Message } from './MessageTemp';
import './MessageContent.css';


export function Messages({ content }){
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }), [content];

  return(
    <div 
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      
      {content.map((details)=>{
        return(
          
            <Message
              message={details.message}
              timeStamp={details.timeStamp}
              sender={details.sender}
              key={details.id}
            />
          
        )
      })}
    
    </div>
  )

}