import React from "react";
import cpebg from "./img/logo-cpe.jpg";
import BotAvatar from "./img/robot.png";

const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ backgroundImage: `url(${cpebg})` ,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}
      >
        <img alt="BotAvatar" src={BotAvatar} style={{width: "70%"}}/>
      </div>
    </div>
  );
};

export default CoBotAvatar;
