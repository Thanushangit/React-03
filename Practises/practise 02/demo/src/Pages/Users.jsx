import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const Users = () => {

  const navigator= useNavigate();

  const data= useLoaderData();

  return (
    <div>
      <h4>Users Component</h4>
      {
        
        data.map((user)=>(
          <div className="item" key={user.id} onClick={()=>navigator('user/'+user.id)}>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default Users