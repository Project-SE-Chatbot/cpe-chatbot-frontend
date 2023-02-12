import React from "react";

const CustomUserMessage = (props) => {

  return (
      <div className="chatbot-user-chat-message">
      <p>{props.message}</p>
    </div>
)};

export default CustomUserMessage;
