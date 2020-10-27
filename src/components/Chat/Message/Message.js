import React from 'react';
import './Message.css';

function Message({ name, message, timestamp, received }) {
  return (
    <div className={`message ${received ? 'message__reciever' : ''}`}>
      <span className="message__name">{name}</span>
      <p>{message}</p>
      <span className="message__timestamp">
        {new Date(timestamp).toLocaleTimeString()}
      </span>
    </div>
  );
}

export default Message;
