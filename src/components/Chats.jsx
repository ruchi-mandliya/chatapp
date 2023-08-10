import React from "react";
import pic1 from "../assets/img/postpic3.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="usersChat">
        <img src={pic1} alt="" />
        <div className="userChatInfo">
          <span>Joy</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
