import './App.css';
import { useState } from "react";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { Chatbot } from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="app-chatbot-container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
          </div>
      </header>
    </div>
  );
}

export default App;
