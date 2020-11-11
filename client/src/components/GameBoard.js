import React, { useEffect } from 'react'
import socketIoClient from 'socket.io-client'

const ENDPOINT = process.env.API_URL || "http://127.0.0.1:5000";

const GameBoard = ({ players }) => {

  useEffect(() => {

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
