import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    /*     axios.get('/messages/sync').then((response) => setMessages(response.data));
     */
  }, []);

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

  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/chat/:room">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
