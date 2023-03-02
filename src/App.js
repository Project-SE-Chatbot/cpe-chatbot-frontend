import './App.css';
import { useState } from "react";
import config from "./chatbotConfig";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { Chatbot } from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import background from "./img/CPEWebMockup.png";
import BotAvatar from "./img/robot.png";
import cpebg from "./img/logo-cpe.jpg";
import { Route,Routes } from 'react-router-dom';
import AdminPage from './AdminPages/Admin';
import Home from './Home';

function App() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundSize: 'cover'
    }}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Admin' element={<AdminPage />}></Route>
        </Routes>

      {showBot && (
        <Fade big>
          <div className="app-chatbot-container">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </Fade>
      )}
      <Flip left cascade>
        <button
          className="app-chatbot-button"
          onClick={() => toggleBot((prev) => !prev)}
          style={{ backgroundImage: `url(${cpebg})` ,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}
        >
          <img alt="BotAvatar" src={BotAvatar} style={{width: "90%"}}/>
        </button>
      </Flip>
    </div>
  );
}

export default App;
