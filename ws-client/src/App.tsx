import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const [serverMessagge, setServerMessage] = useState<string>("");
  const inputRef = useRef(null);

  const sendMessage = () =>{
    if(!socket){
      return;
    }
    //@ts-ignore
    socket.send(inputRef.current.value);
    setServerMessage("");
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000")
    //@ts-ignore
    setSocket(ws);
    ws.onmessage = (e) =>{
      setServerMessage(e.data);
    }
  },[])

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder='Your message' />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div>
        {serverMessagge}
      </div>
    </>
  )
}

export default App
