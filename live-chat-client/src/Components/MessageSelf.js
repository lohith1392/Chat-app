import React from "react";
import "./myStyles.css";
import { useSelector } from "react-redux";
function MessageSelf({ props }) {
  var props2 = { name: "You", message: "This is sample message" };
  const lighttheme = useSelector((state) => state.themeKey);
  return (
    <div className="self-message-container">
      <div className={"messageBox" + (lighttheme ? "" : " dark")}>
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}

export default MessageSelf;
