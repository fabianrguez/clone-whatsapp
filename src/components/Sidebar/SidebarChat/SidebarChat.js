import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat({ room, lastMessage }) {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>{room}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
