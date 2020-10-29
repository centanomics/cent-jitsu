import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <p>Looks like you got lost.</p>
      <Link to="/">head back to safety</Link>
    </div>
  )
}

export default NotFound
