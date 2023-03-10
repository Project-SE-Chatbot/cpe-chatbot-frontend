import React from "react";


import Reaction from "../widgets/reaction";
import NewlineText from "./Newlinetext";

const CustomChatbotMessage = (props) => {
  const handleClick = (e) => {
    console.log(props.message)
  };
  const url= (p) =>{

  }

  return (
    <div>
      <div className="chatbot-chat-bot-message">
      <NewlineText text={props.message}/>
    </div>
      
      <Reaction message={props.message} />
    </div>
  );
};

export default CustomChatbotMessage;
