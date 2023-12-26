import React from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../Images/chatlogo.png";
import { Height } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function Users() {
  const lighttheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className={"list-container" + (lighttheme ? "" : " dark2")}
      >
        <div className={"ug-header" + (lighttheme ? "" : " dark1")}>
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
            alt="logo"
          ></img>
          <p className={"ug-title" + (lighttheme ? "" : " dark1")}>
            Online Users
          </p>
        </div>
        <div className={"sb-search" + (lighttheme ? "" : " dark1")}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input
            placeholder="search"
            className={"search-box" + (lighttheme ? "" : " dark1")}
          />
        </div>
        <div className="ug-list">
          <div className={"list-tem" + (lighttheme ? "" : " dark1")}>
            <p className="con-icon">T</p>
            <p className={"con-title" + (lighttheme ? "" : " dark1")}>
              Test Users
            </p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test Users</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Users;
