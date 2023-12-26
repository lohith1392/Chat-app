import "./App.css";
import React from "react";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import Groups from "./Components/Groups";
import CreateGroups from "./Components/CreateGroups";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const lighttheme = useSelector((state) => state.themeKey);
  return (
    <div className={"App" + (lighttheme ? "" : " dark3")}>
      {/* <Login /> */}
      {/* <MainContainer /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
