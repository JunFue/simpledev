import { useState} from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
import  dayjs  from 'dayjs';




export function Input({ content, setContent }){
  const [inputText, setInputText] = useState('');
  const time = dayjs().valueOf();
  const currentTime = dayjs(time).format('h:mma');
  const [timeStamp, setTimeStamp] = useState('');
  
  
  
  
  function saveInputText(event){
    setInputText(event.target.value);
  }

 
    async function sendMessage(){
      setTimeStamp(currentTime);
      console.log(timeStamp)
    const newChatMessages = [
      ...content,
      {
      
      message: inputText,
      timeStamp: currentTime,
      sender:'user',
      id: crypto.randomUUID()
      }
    ]
    setContent(newChatMessages);
    setInputText('')

    const response = await Chatbot.getResponseAsync(inputText);
    setContent([
      ...newChatMessages,
      {
      
      message: response,
      timeStamp: currentTime,
      sender:'robot',
      id: crypto.randomUUID()
      }
    ]);

    

  }
  

  function action(event){
    if (event.key === 'Enter'){
      sendMessage();
    } else if (event.key === 'Escape'){
      setInputText('');
    }

  }
  return(
    <div  className="chat-input-container">
    <input
      placeholder="Send a message to Chatbot"
      onChange={saveInputText}
      value={inputText}
      onKeyDown={action}
      className="chat-input"
    />
    <button
      onClick={sendMessage}
      className="send-button"
    >Send</button>
    </div>
  )
}
