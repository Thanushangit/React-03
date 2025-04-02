import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const User = () => {

    const data=useLoaderData();
    const {id} =useParams();
  return (
    <>
        <div>User {id}</div>
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
    </>
    
  )
}

export default User