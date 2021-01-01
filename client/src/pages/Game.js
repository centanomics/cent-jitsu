import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import { Redirect } from 'react-router-dom'

import { addPlayer, subscribeToTimer, getPlayerId } from '../utils/API';
import GameBoard from '../components/GameBoard';

const Game = () => {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={`/`} />
    }
  }

  // how many players are connected to the game
  // won't add you if there are already 2 players
  const [players, setPlayers] = useState([]);
  const [playerId, setPlayerId] = useState('');

  const location = useLocation().pathname
  const gameId = location.substring(location.lastIndexOf('/') + 1);
  
  useEffect(() => {
    subscribeToTimer(1000, (err, people) => setPlayers(people.filter(player => player.gameId === gameId).length))

    addPlayer(gameId, (player) => setRedirect(!redirect))

    getPlayerId((id) => setPlayerId(id));
    // eslint-disable-next-line 
  }, [])
  const onClick = () => {
    copy(window.location.href)
  }
  return (
    <div>
      {renderRedirect()}
      {
        players === 2 ?
          <div>
            <GameBoard gameId={gameId} playerId={playerId} />
          </div> :
          <div>
            <p>Waiting for another player to join</p>
            <button onClick={onClick}>Copy link and share it!</button>
          </div>
      }
    </div>
  )
}

export default Game
