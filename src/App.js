import { useState , useRef } from 'react';
import './App.css';
import { Auth } from './component/Auth';
import Cookies from 'universal-cookie' 
const  cookies  = new Cookies()
function App() {
  const [isAuth , setIsAuth] = useState(cookies.get("auth-token")) 
  const [room , setRoom] = useState(null)
  const roomInputRef = useRef(null) ; 
  if(!isAuth){
      return (
        <div className="">
              <Auth />
        </div>
      );
    }
   
    return  (
      <div>
            {room ? 
            <div>
              chat 
              </div> :
              <div className="room">
                <label> Enter your Name</label>
                <input type="" value={room} ref = {roomInputRef} />
                <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
              </div>
              }
      </div>
    )
}

export default App;
