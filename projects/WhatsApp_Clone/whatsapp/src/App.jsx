import React, { useState } from 'react';
import './App.css'
import Display from './Commponents/Display';
import Details from './Commponents/Details';

const App = () => {

  const [battery,setBattery] =useState(20);
  const [dp,setDp] =useState();
  const [name,setName] =useState('Thanushan');
  const [status,setStatus] =useState('Offline');
  const [recivemessage,setReceiveMessage] =useState('Hii');
  const [sendermessage,setSendermessage] =useState('ohh');


  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/logo_new.png" alt="" className='image-logo'/>
        </div>
        <h2>Fake WhatsApp</h2>
      </nav>
      <div className="item">
        <Details battery={battery} setBattery={setBattery} dp={dp} setDp={setDp} name={name} setName={setName} status={status}  setStatus={setStatus}
         recivemessage={recivemessage} setReceiveMessage={setReceiveMessage} sendermessage={sendermessage} setSendermessage={setSendermessage}/>
         <Display battery={battery} dp={dp} name={name} status={status}
         recivemessage={recivemessage} sendermessage={sendermessage}
         />
      </div>
    </div>
  )
}

export default App