"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3000 });
let userCount = 0;
wss.on("connection", (socket) => {
    userCount++;
    socket.send("user connected #" + userCount);
    // when we receive message from client
    socket.on("message", (client_message) => {
        if (client_message.toString() == "ping") {
            socket.send("pong");
        }
    });
});
