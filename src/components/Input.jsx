import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Write your message here..." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <i className="fa-solid fa-paperclip"></i>
        </label>

        <i className="fa-solid fa-paper-plane"></i>
      </div>
    </div>
  );
};

export default Input;
