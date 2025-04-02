import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <div>
        <h1>404 Error... Page not found.</h1>
        <h4><NavLink to={'/'}>go to the home page... </NavLink> </h4>
    </div>
  )
}

export default Pagenotfound