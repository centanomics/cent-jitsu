import React from 'react'
import uuid from 'uuid';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <h1>Cent-jitsu</h1>
      <Link to={`/game/${uuid.v4()}`}>Start!</Link>
    </main>
  )
}

export default Home
