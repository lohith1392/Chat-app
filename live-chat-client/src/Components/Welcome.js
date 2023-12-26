import React from "react";
import logo from "../Images/chatlogo.png";
import { useSelector } from "react-redux";

function Welcome() {
  const lighttheme = useSelector((state) => state.themeKey);
  return (
    <div className={"welcome-container" + (lighttheme ? "" : " dark2")}>
      <img src={logo} alt="Logo" className="welcome-logo"></img>
      <p>View and text directly to people present in the chat rooms</p>
    </div>
  );
}

export default Welcome;
