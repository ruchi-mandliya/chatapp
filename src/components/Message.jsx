import React from "react";
import pic1 from "../assets/img/postpic1.jpg";

const Message = () => {
  return (
    <div className="message admin">
      <div className="messageInfo">
        <img src={pic1} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Message;
