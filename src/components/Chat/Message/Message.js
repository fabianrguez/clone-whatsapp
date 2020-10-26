import React from 'react';
import './Message.css';

function Message({ name, message, timestamp, isReciever }) {
  return (
    <div className={`message ${isReciever ? 'message__reciever' : ''}`}>
      <span className="message__name">{name}</span>
      <p>{message}</p>
      <span className="message__timestamp">{new Date().toUTCString()}</span>
    </div>
  );
}

export default Message;
