import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Users = () => {
  const users = useLoaderData(); // users is an array

  return (
    <div>
      {users.map((uss) => {
        return (
          <NavLink key={uss.id} to={uss.id.toString()}>
            <div className='item'>
              <h4>{uss.name}</h4>
              <p>{uss.email}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Users;
