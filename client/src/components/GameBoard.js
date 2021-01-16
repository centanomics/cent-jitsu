import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import Deck from './Deck';

import {subscribeToTimer} from '../utils/API';

import '../styles/App.css'

const GameBoard = ({gameId, playerId}) => {

  // const [players, setPlayers] = useState([]);
  // const [playerId, setPlayerId] = useState('');
  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   getPlayerId((id) => setPlayerId(id));
  //   subscribeToTimer(1000, setPlayers((null, peeps => peeps.filter(player => player.gameId === gameId))))
    // const tempArr = []
    // tempArr.push(players.filter(player => player.id !== playerId)[0])
    // tempArr.push(players.filter(player => player.id === playerId)[0])
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
  // const [players, setPlayers] = useState([]);
  // useEffect(() => {
  //   subscribeToTimer(
  //     1000,
  //     (err, people) => setPlayers(
  //       people.filter(player => player.gameId === gameId))
  //   )
  //   const tempArr = []
  //   tempArr.push(players.filter(player => player.id !== playerId)[0])
  //   tempArr.push(players.filter(player => player.id === playerId)[0])
  //   setPlayers(tempArr)
  //   //eslint-disable-next-line
  // }, [])
  return (
    <div onClick={() => {console.log(playerId, '\n', players[0].id)}}>Gameboard</div>
  )
}

GameBoard.propTypes = {
  gameId: PropTypes.string.isRequired,
  playerId: PropTypes.string.isRequired,
}

export default GameBoard
