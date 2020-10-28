import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarChat.css';

function SidebarChat({ room, lastMessage }) {
  const truncate = (string, limit) => {
    return string?.length > limit
      ? string.substr(0, limit - 1) + '...'
      : string;
  };

  return (
    <Link to={`/chat/${room}`}>
      <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
          <h2>{room}</h2>
          <p>{truncate(lastMessage, 20)}</p>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
