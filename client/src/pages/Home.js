import React, {useState} from 'react'
import uuid from 'uuid';
import {Redirect} from 'react-router-dom'

const Home = () => {
  const [redirect, setRedirect] = useState(false);
  const onClick = () => {
    setRedirect(!redirect)
  }
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={`/game?gameId=${uuid.v4()}`} />
    }
  }
  return (
    <main>
      <h1>Cent-jitsu</h1>
      {renderRedirect()}
      <button onClick={onClick}>Start!</button>
    </main>
  )
}

export default Home
