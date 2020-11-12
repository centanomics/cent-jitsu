import React, { useEffect, useState } from 'react'
import Deck from './Deck';

import '../styles/App.css'

const GameBoard = ({ players, playerId }) => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const tempArr = []
    tempArr.push(players.filter(player => player.id !== playerId)[0])
    tempArr.push(players.filter(player => player.id === playerId)[0])
    setPeople(tempArr)
    // eslint-disable-next-line 
  }, [])
  return (
    <div className="gameBoard">
      {people.map((player, i) => {
        return (
          <div key={`${player.id}`} className={`player${i + 1}`} >
            <Deck playerId={player.id} cards={player.deck} />
            {player.id === playerId ? <p>This is you</p> : null}
          </div>
        )
      })}
    </div>
  )
}

export default GameBoard
