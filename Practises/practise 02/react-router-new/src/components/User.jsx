import React from 'react'
import { useLoaderData } from 'react-router-dom'


export const User = () => {
    const usedetails=useLoaderData();
   
  return (
    <div>
        <p><strong>username:</strong>{usedetails.name}</p>
        <p><strong>email:</strong>{usedetails.email}</p>
        <p><strong>phone:</strong>{usedetails.phone}</p>
        <p><strong>website:</strong>{usedetails.website}</p>
        <p><strong>address:</strong>{usedetails.address.street}</p>
    </div>
  )
}

