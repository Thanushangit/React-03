import React from 'react';

const Display = (props) => {


  const getFormattedTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}.${formattedMinutes} ${ampm}`;
  };


  const getAvatar = () => {
    if (props.dp) {
      return props.dp;
    } else {
      const encodedName = encodeURIComponent(props.name);
      return `https://ui-avatars.com/api/?name=${encodedName}`;
    }
  };

  return (
    <div className="display">
      <div className="whatsapp-nav">
        <div className="topnav">
          <div>
            <p>{getFormattedTime()}</p>
          </div>
          <div className="default-properities">
            <div className="d-flex align-items-center">
              <p><b>LTE</b></p>
              <p><i className="fa-solid fa-signal mx-1 mb-1"></i></p>
            </div>
            <div className="d-flex align-items-center">
              <p><i className="bi bi-battery-half mx-1"></i></p>
              <p>{props.battery}%</p>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="left d-flex align-items-center">
            <i className="fa-solid fa-arrow-left"></i>
            <div className="user-dp">
              <img src={getAvatar()} alt="" />
            </div>
            <div className="user-name">
              <h5 className="mx-2 my-0">{props.name}</h5>
              <span className="check mx-2">{props.status}</span>
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
          {props.messages.map((msg, idx) => (
            <div
              className={`chat-message ${msg.type === "sent" ? "sent" : "received"}`}
              key={idx}
            >
              <p>{msg.text}</p>
              <div className="Time d-flex">
                <p>{getFormattedTime()}</p>
                {msg.type === "sent" && (
                  <div className="tick">
                    <i className="fa-solid fa-check"></i>
                    <i className="fa-solid fa-check"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
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
