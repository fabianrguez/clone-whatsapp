import { Avatar, IconButton } from '@material-ui/core';
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from '@material-ui/icons';
import React from 'react';
import './Chat.css';
import Message from './Message/Message';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <Message name="tal" message="Eyy whatsapp men!" />
        <Message name="cual" message="Eyy dude!" isReciever />
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
