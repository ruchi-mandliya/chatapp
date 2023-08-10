import React from "react";
import pic1 from "../assets/img/postpic3.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
        <span className="searchIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <div className="usersChat">
        <img src={pic1} alt="" />
        <div className="userChatInfo">
          <span>Joy</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
