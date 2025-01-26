import React from 'react'

export const UseSingleLoader = async ({params}) => {
    const {id}=params;
    const res=await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    if(!res.ok){
        throw Error("user details not found...")
    }
    const data=await res.json();
    return data;
    
}

