import React, { useState } from 'react';
import './App.css'
import Display from './Commponents/Display';
import Details from './Commponents/Details';

const App = () => {

  const [battery, setBattery] = useState(20);
  const [dp, setDp] = useState("/dp.jpg");
  const [name, setName] = useState('Thanushan');
  const [status, setStatus] = useState('Offline');
  const [messages, setMessages] = useState(
    [
      { text: "Hello", type: "sent" },
      { text: "Hi", type: "received" },
      { text: "How are you?", type: "sent" },
      { text: "I'm fine!", type: "received" }
    ]

  );



  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/logo_new.png" alt="" className='image-logo' />
        </div>
        <h2>Fake WhatsApp</h2>
      </nav>
      <div className="item">
        <Details battery={battery} setBattery={setBattery} dp={dp} setDp={setDp} name={name} setName={setName} status={status} setStatus={setStatus}
          messages={messages} setMessages={setMessages} />
        <Display battery={battery} dp={dp} name={name} status={status}
          messages={messages} setDp={setDp}
        />
      </div>
    </div>
  )
}

export default App