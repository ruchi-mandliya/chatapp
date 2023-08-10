import React from "react";
import pic from "../assets/img/postpic2.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <span className="logo">Chatting App</span> */}
      <div className="user">
        <img src={pic} alt="" />
        <span>Ruchi</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
