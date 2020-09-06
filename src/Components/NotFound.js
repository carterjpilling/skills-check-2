import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = props => {
  return <div>
    <h1>Sorry, you found a hidden portal. Let's get you back to Eart.</h1>
    <Link to='/'>Check out our Products!</Link>
  </div>
}

export default NotFound