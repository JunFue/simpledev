      import { useState } from "react";
      import './Form.css';
      
      export function Form (){
        const [view, setView] = useState(true);
          function toggle(){
            setView(c => !c)
          }
          

        return (
          <>
            <div className="greetings">Hello, Welcome to my website!</div>
            <div className="input-text">
              <input className="email" placeholder="Email" type="email" />
            </div>
            <div className="input-text">
              <input className="password" placeholder="Password" type={view===true
                ? 'password'
                : 'text'
              } />
              <button 
                className="tgl-button"
                onClick={toggle}
              >{view===true
                ? 'Show'
                : 'Hide'
              }</button>
            </div>
            <div className="auth-buttons">
              <button className="login">Login</button>
              <button className="signup">Signup</button>
            </div>
          </>
        )
      }
