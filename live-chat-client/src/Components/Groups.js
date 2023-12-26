import React from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../Images/chatlogo.png";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function Groups() {
  const lighttheme = useSelector((state) => state.themeKey);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className="list-container"
      >
        <div className={"ug-header" + (lighttheme ? "" : " dark1")}>
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
            alt="logo"
          ></img>
          <p className={"ug-title" + (lighttheme ? "" : " dark1")}>
            Available Groups
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
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-tem" + (lighttheme ? "" : " dark1")}
          >
            <p className={"con-icon" + (lighttheme ? "" : " dark1")}>T</p>
            <p className={"con-title" + (lighttheme ? "" : " dark1")}>
              Test Group
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-tem" + (lighttheme ? "" : " dark1")}
          >
            <p className={"con-icon" + (lighttheme ? "" : " dark1")}>T</p>
            <p className={"con-title" + (lighttheme ? "" : " dark1")}>
              Test Group
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-tem" + (lighttheme ? "" : " dark1")}
          >
            <p className={"con-icon" + (lighttheme ? "" : " dark1")}>T</p>
            <p className={"con-title" + (lighttheme ? "" : " dark1")}>
              Test Group
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-tem" + (lighttheme ? "" : " dark1")}
          >
            <p className={"con-icon" + (lighttheme ? "" : " dark1")}>T</p>
            <p className={"con-title" + (lighttheme ? "" : " dark1")}>
              Test Group
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-tem" + (lighttheme ? "" : " dark1")}
          >
            <p className={"con-icon" + (lighttheme ? "" : " dark1")}>T</p>
            <p className={"con-title" + (lighttheme ? "" : " dark1")}>
              Test Group
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Groups;
