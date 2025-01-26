import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='container'>
        <h3>
            List of users...
        </h3>
        <Outlet/>
    </div>
  )
}

export default UserLayout