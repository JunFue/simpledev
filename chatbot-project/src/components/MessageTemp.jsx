import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.png';
import './MessageTemp.css';




export function Message({message, sender, timeStamp }){
  
  
  return(
    <div className={
      sender === 'user' 
      ? 'chat-message-user' 
      : 'chat-message-robot'
    }>
      {sender==='robot' && (<img src={RobotProfileImage} className="chat-message-profile" />)}
      <div className="chat-message-text">
        {message}
        <div className='current-time'>{timeStamp}</div>
      </div>
      {sender==='user' && (<img src={UserProfileImage} className="chat-message-profile" />)}
    </div>
  )
}