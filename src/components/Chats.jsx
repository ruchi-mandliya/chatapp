import React from "react";
import pic1 from "../assets/img/i12.png";

const Chats = () => {
  return (
    <div className="chats">
      <div className="usersChat">
        <img src={pic1} alt="" />
        <div className="userChatInfo">
          <span>Zan</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
