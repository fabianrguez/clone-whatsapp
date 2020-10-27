import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat/SidebarChat';
import axios from '../../axios';

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('/rooms').then((response) => setRooms(response.data));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        {rooms &&
          rooms.map((room, index) => <SidebarChat key={index} {...room} />)}
      </div>
    </div>
  );
}

export default Sidebar;
