import React, { useState } from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  const lighttheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
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
  const navigate = useNavigate();
  return (
    <div className={"sidebar-container" + (lighttheme ? "" : " dark2")}>
      <div className={"sb-header" + (lighttheme ? "" : " dark1")}>
        <div className="other-icons">
          <div>
            <IconButton>
              <AccountCircleIcon
                className={"icon" + (lighttheme ? "" : " dark1")}
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => {
                navigate("users");
              }}
            >
              <PersonAddIcon
                className={"icon" + (lighttheme ? "" : " dark1")}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate("groups");
              }}
            >
              <GroupAddIcon className={"icon" + (lighttheme ? "" : " dark1")} />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate("create-groups");
              }}
            >
              <AddCircleIcon
                className={"icon" + (lighttheme ? "" : " dark1")}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch(toggleTheme());
              }}
            >
              {lighttheme && (
                <NightlightIcon
                  className={"icon" + (lighttheme ? "" : " dark1")}
                />
              )}
              {!lighttheme && (
                <LightModeIcon
                  className={"icon" + (lighttheme ? "" : " dark1")}
                />
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <div className={"sb-search" + (lighttheme ? "" : " dark1")}>
        <IconButton>
          <SearchIcon className={"icon" + (lighttheme ? "" : " dark1")} />
        </IconButton>
        <input
          placeholder="search"
          className={"search-box" + (lighttheme ? "" : " dark1")}
        />
      </div>
      <div className={"sb-conversation" + (lighttheme ? "" : " dark1")}>
        {conversations.map((conversation) => {
          return (
            <ConversationItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
