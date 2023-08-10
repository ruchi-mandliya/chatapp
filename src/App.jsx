import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";

const App = () => {
  return (
    <div>
      <Home />
      <Register />
      <Login />
    </div>
  );
};

export default App;
