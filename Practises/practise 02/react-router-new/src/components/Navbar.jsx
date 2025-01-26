import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
   const navigate=useNavigate();
  return (
    <div className='navbar'>
        <div className="logo"><h1>Thanushan</h1></div>
        <ul>
         <NavLink to="/">
            <li>Home</li>
         </NavLink>
         <NavLink to="/product">
            <li>Product</li>
         </NavLink>
         <NavLink to="/contact">
            <li>Contact</li>
         </NavLink>
         <NavLink to="/about">
          <li>About</li>
         </NavLink>
         <NavLink to="/users">
          <li>User</li>
         </NavLink>
        </ul>
        <button onClick={()=>navigate("/login",{replace:true})}>Login</button>
    </div>
  )
}

export default Navbar