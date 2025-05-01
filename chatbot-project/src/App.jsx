import { useEffect, useState} from 'react'; 
import { Input } from './components/ChatInput';
import { Messages } from './components/MessageContent';
import { Chatbot } from 'supersimpledev';
import './App.css';





export function App(){
  const [chatMessages, setChatMessages] =  useState(JSON.parse(localStorage.getItem('messages')) ||[{
      message: 'Hello! What can you do?',
      sender: 'user',
      id: crypto.randomUUID()
    }, {
      message: "Currently, I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!",
      sender: 'robot',
      id: crypto.randomUUID()
    }, {
      message: "What is today's date?",
      sender: 'user',
      id: crypto.randomUUID()
    }, {
      message: "Today is April 25, 2025",
      sender: 'robot',
      id: crypto.randomUUID()
    }


  ]);
  

  useEffect( ()=>{
    Chatbot.addResponses(
      {
        "what is my name": "Junel F. Fuentes",
        "my wife's name": "Maribeth G. Fuentes",
        "my enemy": "Jessica Kikay Pangit"
      }
    )}
  ), [];


  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return(
    <div className="app-container">
      
      <Messages
        content={chatMessages} 
      />
      

      <Input
        content={chatMessages}
        setContent={setChatMessages}
      />
    </div>
  )
}

export default App
