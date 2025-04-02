import React from 'react';
import { Outlet } from 'react-router-dom';


const UsersLayout = () => {
  return (
    <div>
            <h1>users layout</h1>
            <Outlet/>

    </div>
    
  )
}

export default UsersLayout