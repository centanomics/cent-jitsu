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

export default App;
