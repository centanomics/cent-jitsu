import React, { useEffect, useState } from 'react'
import Deck from './Deck';

import {getPlayerId, subscribeToTimer} from '../utils/API';

import '../styles/App.css'

const GameBoard = ({gameId}) => {

  // const [players, setPlayers] = useState([]);
  // const [playerId, setPlayerId] = useState('');
  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   getPlayerId((id) => setPlayerId(id));
  //   subscribeToTimer(1000, setPlayers((null, peeps => peeps.filter(player => player.gameId === gameId))))
  //   const tempArr = []
  //   tempArr.push(players.filter(player => player.id !== playerId)[0])
  //   tempArr.push(players.filter(player => player.id === playerId)[0])
  //   console.log(players)
  //   setPeople(tempArr)
  //   // eslint-disable-next-line 
  // }, [])
  // return (
  //   <div className="gameBoard">
  //     {people.map((player, i) => {
  //       return (
  //         <div key={`${player.id}`} className={`player${i + 1}`} >
  //           <Deck playerId={player.id} cards={player.deck} />
  //           {player.id === playerId ? <p>This is you</p> : null}
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
  return (
    <div>Gameboard</div>
  )
}

export default GameBoard
