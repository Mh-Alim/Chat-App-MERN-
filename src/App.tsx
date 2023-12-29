import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ChatArea from "./components/ChatArea";
import UserGroups from "./components/UserGroups";
import CreateGroup from "./components/CreateGroup";
import Login from "./components/Login";

function App() {
  const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)
  return (
    <div className={`App ${isDarkTheme && `dark_bg2`}`}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<ChatArea />} />
          <Route path="users" element={<UserGroups />} />
          <Route path="groups" element={<UserGroups />} />
          <Route path="create_group" element={<CreateGroup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
