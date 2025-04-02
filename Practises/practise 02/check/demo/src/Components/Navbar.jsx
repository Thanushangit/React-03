import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigator = useNavigate();
  return (
    <div className="navbar">
        <div className="logo">
            Thanushan
        </div>

        <ul>
            <NavLink to={'/'} className={'navlink'}>  <li>Home</li> </NavLink>
           
            <NavLink to={'/about'} className={'navlink'}><li>About</li> </NavLink>
            
            <NavLink to={'/product'} className={'navlink'}><li>Product</li> </NavLink>
            
            <NavLink to={'/contact'} className={'navlink'}> <li>Contact</li> </NavLink>
           
            <NavLink to={'/users'} className={'navlink'}>  <li>users</li></NavLink>
           
        </ul>
        <button onClick={() => navigator("/login")}>Login</button>
    </div>
  )
}

export default Navbar