import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ChatArea from "./components/ChatArea";
import UserGroups from "./components/UserGroups";
import CreateGroup from "./components/CreateGroup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
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
