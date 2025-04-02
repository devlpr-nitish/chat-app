import { WebSocketServer } from "ws";


const wss = new WebSocketServer({port : 3000});

let userCount = 0;
wss.on("connection", (socket)=>{
    userCount++;
    socket.send("user connected #" + userCount);

    // when we receive message from client
    socket.on("message", (client_message)=>{

        if(client_message.toString() == "ping"){
            socket.send("pong")
        }
        
    })
});

