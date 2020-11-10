import React, {useEffect} from 'react'

const GameBoard = ({ socket, players }) => {
  useEffect(() => {
    socket.emit("getPlayerId");
    // eslint-disable-next-line 
  }, [])
  return (
    <div>
      <div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default GameBoard
