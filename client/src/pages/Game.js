import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import socketIoClient from 'socket.io-client'

const ENDPOINT = "http://127.0.0.1:5000"

const Game = () => {
  const history = useHistory();
  useEffect(() => {
    const socket = socketIoClient(ENDPOINT);
    const data = {gameId: useHistory.location}
    socket.emit("gameCreate")
  }, [])
  const onClick = () => {
    copy(window.location.href)
    
    console.log(history.location.pathname)
  }
  return (
    <div>
      Game page
       <button onClick={onClick}>Copy link and share it!</button>
    </div>
  )
}

export default Game
