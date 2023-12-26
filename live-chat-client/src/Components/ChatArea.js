import React, { useState } from "react";
import "./myStyles.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function ChatArea() {
  const lighttheme = useSelector((state) => state.themeKey);
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last message #3",
      timeStamp: "today",
    },
  ]);
  var props = conversations[0];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className={"chatArea-container" + (lighttheme ? "" : " dark2")}
      >
        <div className={"chatArea-header" + (lighttheme ? "" : " dark1")}>
          <p className="con-icon">{props.name[0]}</p>
          <div className="header-text">
            <p className={"con-title" + (lighttheme ? "" : " dark1")}>
              {props.name}
            </p>
            <p className={"con-timeStamp" + (lighttheme ? "" : " dark1")}>
              {props.timeStamp}
            </p>
          </div>
          <IconButton>
            <DeleteIcon className={"icon" + (lighttheme ? "" : " dark1")} />
          </IconButton>
        </div>
        <div className={"messages-container" + (lighttheme ? "" : " dark1")}>
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
        </div>
        <div className={"text-input-area" + (lighttheme ? "" : " dark1")}>
          <input
            placeholder="Type a Message"
            className={"search-box" + (lighttheme ? "" : " dark1")}
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ChatArea;
