import React from 'react'

const Details = (props) => {
  return (
    <div className='details'>
      <h2>Enter your details</h2>
      <div className="input">
        <label htmlFor="">Battery Percentage</label>
        <input type="range" step={10} min={10}
        value={props.battery}
        onChange={(e)=>props.setBattery(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="">DP</label>
        <input type="text"/>
      </div>
      <div className="input">
        <label htmlFor="">UserName</label>
        <input type="text" value={props.name}
        onChange={(e)=>props.setName(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="">Status</label>
        <select name="status" id="" value={props.status} onChange={(e)=>props.setStatus(e.target.value)}>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="">Receiver Message <span><i className="bi bi-send mx-5" title='Send'></i></span></label>
        <textarea name="receiver" id=""></textarea>
      </div>
      <div className="input">
        <label htmlFor="">Sender Message<span><i className="bi bi-send mx-5" title='Send'></i></span></label>
        <textarea name="sender" id=""></textarea>
      </div>
    </div>
  )
}

export default Details