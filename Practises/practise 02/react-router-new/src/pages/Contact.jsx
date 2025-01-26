import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const navigator=useNavigate();
  return (
    <div className='container'>
      <h1>Contact</h1>
      <button onClick={()=>navigator("info")} className='btn'>Information</button>
      <button onClick={()=>navigator("form")} className='btn'>Form</button>
      </div>
  )
}

export default Contact