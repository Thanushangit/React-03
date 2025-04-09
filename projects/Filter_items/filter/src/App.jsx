import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import SideNavbar from './Components/SideNavbar'
import Contents from './Components/Contents'

const App = () => {
  return (
    <div>
     <Navbar/>

      <div className="content gap-5">
        <SideNavbar/>
        <Contents/>
      </div>
    </div>
  )
}

export default App