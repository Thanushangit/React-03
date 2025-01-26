import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='container'>
        <h2>
            List of users...
        </h2>
        <Outlet/>
    </div>
  )
}

export default UserLayout