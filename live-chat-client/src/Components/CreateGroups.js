import React from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function CreateGroups() {
  const lighttheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className={"createGroups-container" + (lighttheme ? "" : " dark1")}
      >
        <input
          placeholder="Enter Name of the Group"
          className={"search-box" + (lighttheme ? "" : " dark1")}
        />
        <IconButton>
          <DoneOutlineRoundedIcon />
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
}

export default CreateGroups;
