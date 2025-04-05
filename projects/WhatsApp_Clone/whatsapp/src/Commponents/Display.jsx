import React from 'react';

const Display = () => {
  return (
    <div className="display">
      <div className="whatsapp-nav">
        <div className="topnav">
          <div>
            <p>05.36</p>
          </div>
          <div className="default-properities">
            <div className="d-flex align-items-center">
              <p><b>LTE</b></p>
              <p><i className="fa-solid fa-signal mx-1 mb-1"></i></p>
            </div>
            <div className="d-flex align-items-center">
              <p><i className="bi bi-battery-half mx-1"></i></p>
              <p>80%</p>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="left d-flex align-items-center">
            <i className="fa-solid fa-arrow-left"></i>
            <div className="user-dp">
              <img src="/dp.jpg" alt="" />
            </div>
            <div className="user-name">
              <h5 className="mx-2 my-0">Thanushan</h5>
              <span className="check mx-2">Online</span>
            </div>
          </div>
          <div className="right d-flex align-items-center gap-4">
            <i className="fa-solid fa-video"></i>
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="chat-window">
          <div className="chat-message received">
            <p>Hello! How are you?</p>
            <div className="Time">
              <p>10.08 am</p>
            </div>
          </div>

          <div className="chat-message sent">
            <p>I'm good, thanks!</p>
            <div className="Time tick-container">
              <p>10.11 am</p>
              <div className="tick">
                <i className="fa-solid fa-check"></i>
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="input-container">
          <div className="emoji-1">
            <p><i className="bi bi-emoji-smile emoji"></i></p>
          </div>
          <input type="text" />
          <div className="emoji-2">
            <p><i className="fa-solid fa-paperclip emoji"></i></p>
            <p><i className="bi bi-camera emoji"></i></p>
          </div>
        </div>

        <div className="mic">
          <p><i className="bi bi-mic-fill"></i></p>
        </div>
      </div>
    </div>
  );
};

export default Display;
