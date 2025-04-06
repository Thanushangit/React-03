import React, { useState } from 'react'

const Details = (props) => {

  const [send, Setsend] = useState();
  const [receive, Setreceive] = useState();


  function Clear() {
    Setsend("");
    Setreceive("");
  }

  function Sender() {
    props.setMessages(prev => [...prev, { text: send, type: "sent" }]);
    Clear()

  }

  function Receiver() {
    props.setMessages(prev => [...prev, { text: receive, type: "received" }]);
    Clear()

  }

  return (
    <div className='details'>
      <h2>Enter your details</h2>
      <div className="input">
        <label htmlFor="">Battery Percentage</label>
        <input type="range" min={10} max={90}
          value={props.battery}
          onChange={(e) => props.setBattery(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="">DP</label>
        <input type="text" onChange={(e) => props.setDp(e.target.value)} />
      </div>
      <div className="input">
        <label htmlFor="">UserName</label>
        <input type="text" value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="">Status</label>
        <select name="status" id="" value={props.status} onChange={(e) => props.setStatus(e.target.value)}>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="">Receiver Message <span><i className="bi bi-send mx-5" title='Send' onClick={Receiver}></i></span></label>
        <textarea name="receiver" id="" onChange={(e) => Setreceive(e.target.value)} value={receive}></textarea>
      </div>
      <div className="input">
        <label htmlFor="">Sender Message<span><i className="bi bi-send mx-5" title='Send' onClick={Sender}></i></span></label>
        <textarea name="sender" id="" onChange={(e) => Setsend(e.target.value)} value={send}></textarea>
      </div>
    </div>
  )
}

export default Details