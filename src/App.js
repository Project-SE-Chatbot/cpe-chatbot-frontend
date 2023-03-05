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
import { Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPages/Admin';
import Home from './Home';
import LoginPage from './LoginPage/Login';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Admin' element={<AdminPage />}></Route>
        <Route path='/Login' element={<LoginPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
