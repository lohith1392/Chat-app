import React from "react";
import "./myStyles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ConversationItem({ props }) {
  const lighttheme = useSelector((state) => state.themeKey);
  const navigate = useNavigate();
  return (
    <div
      className={"convsersation-container" + (lighttheme ? "" : " dark")}
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="con-icon">{props.name[0]}</p>
      <p className={"con-title" + (lighttheme ? "" : " dark")}>{props.name}</p>
      <p className="con-lastMessage">{props.lastMessage}</p>
      <p className={"con-timeStamp" + (lighttheme ? "" : " dark")}>
        {props.timeStamp}
      </p>
    </div>
  );
}

export default ConversationItem;
