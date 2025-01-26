import React from 'react'

const UseLoader = async() => {
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        throw Error("unable to load the user details...")
    }
    const data=await res.json();
    return data;
}

export default UseLoader