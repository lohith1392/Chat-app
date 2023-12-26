import React from "react";
import "./myStyles.css";
import { useSelector } from "react-redux";
function MessageOthers({ props }) {
  var props1 = { name: "RandomUser", message: "This is sample message" };
  const lighttheme = useSelector((state) => state.themeKey);
  return (
    <div className="other-message-container">
      <div className="convsersation-container">
        <p className="con-icon">{props1.name[0]}</p>
        <div className={"other-text-content" + (lighttheme ? "" : " dark")}>
          <p className={"con-title" + (lighttheme ? "" : " dark")}>
            {props1.name}
          </p>
          <p className="con-lastMessage">{props1.message}</p>
          <p className="self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
