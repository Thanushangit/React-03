import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container'>
        <h1>404 error, Page Not Found...</h1>
        <Link to="/">go to Home Page</Link>
    </div>
  )
}

export default NotFound