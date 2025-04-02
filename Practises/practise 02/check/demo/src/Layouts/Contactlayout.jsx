import React from 'react';
import Contact from '../Pages/Contact'
import { Outlet, useNavigate } from 'react-router-dom';

const Contactlayout = () => {

    const navigate=useNavigate();
  return (
    <div>
        <Contact/>
        <Outlet/>

        <button onClick={()=>navigate('info')}>Info</button>
        <button onClick={()=>navigate('form')}>form</button>
    </div>
  )
}

export default Contactlayout