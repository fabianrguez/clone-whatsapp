import { Avatar, IconButton } from '@material-ui/core';
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import Message from './Message/Message';
import axios from '../../axios';
import { useParams } from 'react-router-dom';
import Pusher from 'pusher-js';

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const { room } = useParams();

  useEffect(() => {
    axios
      .get(`/messages/${room}/sync`)
      .then((response) => setMessages(response.data));
  }, [room]);

  useEffect(() => {
    const pusher = new Pusher('40fc861f058dbd4ed4b7', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      name: `user-${Math.floor(Math.random() * 100 + 1)}`,
      message: input,
      timestamp: new Date(),
      room,
    });
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>{room}</h3>
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
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
