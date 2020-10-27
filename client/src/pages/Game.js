import React, { useEffect } from 'react'
import {useHistory, useLocation} from 'react-router-dom'

const Game = () => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    
    console.log(window.location.href)
  }, [])
  return (
    <div>
      Game page
    </div>
  )
}

export default Game
