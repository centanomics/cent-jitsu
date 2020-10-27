import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import socketIoClient from 'socket.io-client'
import {Redirect} from 'react-router-dom'

const ENDPOINT = "http://127.0.0.1:5000"

const Game = () => {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={`/`} />
    }
  }


  const location = useLocation().pathname;
  let socket;
  useEffect(() => {
    socket = socketIoClient(ENDPOINT);
    const data = {
      gameId: location.substring(location.lastIndexOf('/')+1)
    }
    socket.emit("gameCreate", data)
    socket.on("fullGame", () => {setRedirect(!redirect)})
    // eslint-disable-next-line 
  }, [])
  const onClick = () => {
    copy(window.location.href)
  }
  return (
    <div>
      Game page
      {renderRedirect()}
       <button onClick={onClick}>Copy link and share it!</button>
    </div>
  )
}

export default Game
