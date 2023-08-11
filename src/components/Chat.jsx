import React from "react";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chatbox">
      <div className="chatinfo">
        <span>harry</span>
        <div className="icons">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
