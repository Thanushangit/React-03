import React from 'react';
import { useLoaderData } from 'react-router-dom';


const User = () => {
    const users = useLoaderData();

 

    return (
        <div>
           {users.name}
           <p>{users.phone}</p>
        </div>
    );
};

export default User;
