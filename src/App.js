import { useState , useRef } from 'react';
import './App.css';
import { Auth } from './component/Auth';
import Cookies from 'universal-cookie' 
import { Chat } from './component/Chat';
const  cookies  = new Cookies()
function App() {
  const [isAuth , setIsAuth] = useState(cookies.get("auth-token")) 
  const [room , setRoom] = useState(null)
  const roomInputRef = useRef(null) ; 
  if(!isAuth){
      return (
        <div className="">
              <Auth setIsAuth={setIsAuth}/>
        </div>
      );
    }
   
    return  (
      <div>
            {room ? (
              <Chat  room = {room} />
              )
             :
              <div className="room">
                <p> Enter your Room Name</p>
                <input type=""  ref={roomInputRef} />
                <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
              </div>
              }
      </div>
    )
}

export default App;
