import {React,useContext} from 'react'
import Counter from './Counter';
import { datacontext } from './Home';

const Login = () => {

  const data=useContext(datacontext)
  return (
    <div>
        <h1>this is login components</h1>
        <h5>this Login component data {data}</h5>
        <Counter/>
    </div>
  )
}

export default Login