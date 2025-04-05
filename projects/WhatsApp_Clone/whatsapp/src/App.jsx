import React from 'react';
import './App.css'
import Display from './Commponents/Display';
import Details from './Commponents/Details';

const App = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/logo_new.png" alt="" className='image-logo'/>
        </div>
        <h2>Fake WhatsApp</h2>
      </nav>
      <div className="item">
        <Details/>
         <Display/>
      </div>
    </div>
  )
}

export default App