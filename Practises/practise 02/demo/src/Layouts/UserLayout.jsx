import React from 'react';
import Users from '../Pages/Users'
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div>
        <h1>Userlayout</h1>
        <Outlet/>
    </div>
  )
}

export default UserLayout