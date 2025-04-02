import React from 'react';
import  Contact from '../Pages/Contact.jsx'
import { Outlet, useNavigate } from 'react-router-dom';

const Contactlayout = () => {

    const navigator=useNavigate();
  return (
    <div>
        <Contact/>
        <Outlet/>

        <button onClick={() =>{navigator('info')}}>Info</button>
        <button onClick={()=>{navigator('form')}}>Form</button>
    </div>
  )
}

export default Contactlayout