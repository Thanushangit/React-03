import {React,useContext} from 'react';
import {datacontext} from './Home'

const Counter = () => {

    const data=useContext(datacontext)
  return (
    <div>
        <h1>this counter components</h1>

        <h5>this is counter data {data} </h5>

    </div>
  )
}

export default Counter