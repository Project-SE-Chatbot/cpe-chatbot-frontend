import React from "react";


import Reaction from "../widgets/reaction";

const CustomChatbotMessage = (props) => {
  const handleClick = (e) => {
    console.log(props.message)
  };
  return (
    <div>
      <div className="chatbot-chat-bot-message">
          <div className="react-chatbot-kit-chat-bot-message-arrow"></div>
      <p>{props.message}</p>
    </div>
      <Reaction message={props.message} />
    </div>
  );
};

export default CustomChatbotMessage;
