import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <div>
        <h1>Error 404... Page not Found?</h1>

    <NavLink to={'/'}>Go to the Home page...</NavLink>
    </div>
  )
}

export default Pagenotfound