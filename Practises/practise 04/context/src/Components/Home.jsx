import {React,createContext} from 'react'
import Login from './Login'

export const datacontext=createContext();

const Home = () => {
  const data="Home data";
  return (
    <div>
        <h1>this home component</h1>

        <datacontext.Provider value={data}>
              <Login/>
        </datacontext.Provider>
       
    </div>
  )
}

export default Home