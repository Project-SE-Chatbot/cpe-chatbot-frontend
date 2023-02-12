import React from "react";


import Reaction from "../widgets/reaction";

const CustomChatbotMessage = (props) => {
  const handleClick = (e) => {
    console.log(props.message)
  };
  return (
    <div>
      <div className="chatbot-chat-bot-message">
      <p>{props.message}</p>
    </div>
      <Reaction message={props.message} />
    </div>
  );
};

export default CustomChatbotMessage;
