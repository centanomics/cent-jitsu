import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import socketIoClient from 'socket.io-client'
import {Redirect} from 'react-router-dom'

const ENDPOINT = process.env.API_URL || "http://127.0.0.1:5000"

const Game = () => {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={`/`} />
    }
  }

  const [players, setPlayers] = useState([]);

  const location = useLocation().pathname;
  let socket;
  useEffect(() => {
    // eslint-disable-next-line 
    socket = socketIoClient(ENDPOINT);
    const gameId = location.substring(location.lastIndexOf('/')+1)
    const data = {
      gameId: gameId
    }
    socket.emit("gameCreate", data)
    socket.on("fullGame", () => { setRedirect(!redirect) })
    socket.on("update", data => {
      setPlayers(data.players.filter(player => player.gameId === gameId))
    })
    
    return () => {
      console.log('lmao')
      socket.emit("disconnect");
    }
    // eslint-disable-next-line 
  }, [])
  const onClick = () => {
    copy(window.location.href)
  }
  return (
    <div>
      {renderRedirect()}
      {players.length === 2 ?
        <div>
          Game Start
        </div> :
        <div>
          Game page
          
          <button onClick={onClick}>Copy link and share it!</button>
        </div>}
      
    </div>
  )
}

export default Game
