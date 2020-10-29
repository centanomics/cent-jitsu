import React, { useState, useEffect } from 'react';
import socketIoClient from 'socket.io-client';

import './styles/App.css';

const ENDPOINT = "http://127.0.0.1:5000"

const App = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIoClient(ENDPOINT);
    socket.on('FromAPI', data => {
      setResponse(data)
    })
    return () => socket.disconnect();
  }, [])

  return (
    <div className="App">
      It's <time dateTime={response}>{response}</time>
    </div>
  );
}

//server code
// const getApiAndEmit = socket => {
//   const response = new Date();

//   socket.emit("FromAPI", response)
// };

// let interval;

// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

export default App;
