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
import Signup from "./components/Signup";
import {
  ToastContainerError,
  ToastContainerSuccess,
} from "./components/ReactToast";
import Authentication from "./components/Authentication";
import GroupChat from "./components/GroupChat";

function App() {
  const isDarkTheme: boolean = useSelector(
    (state: { toggleTheme: boolean }) => state.toggleTheme
  );
  return (
    <div className={`App ${isDarkTheme && `dark_bg2`}`}>
      <Routes>
        <Route
          path="/"
          element={
            <Authentication>
              <Login />
            </Authentication>
          }
        />
        <Route
          path="/signup"
          element={
              <Signup />
          }
        />

        <Route
          path="app"
          element={
            <Authentication>
              <MainContainer />
            </Authentication>
          }
        >
          <Route
            path="welcome"
            element={
              <Authentication>
                <Welcome />
              </Authentication>
            }
          />
          <Route
            path="chat"
            element={
              <Authentication>
                <ChatArea />
              </Authentication>
            }
          />
          <Route
            path="users"
            element={
              <Authentication>
                <UserGroups />
              </Authentication>
            }
          />
          <Route
            path="groups"
            element={
              <Authentication>
                <GroupChat />
              </Authentication>
            }
          />
          <Route
            path="create_group"
            element={
              <Authentication>
                <CreateGroup />
              </Authentication>
            }
          />
        </Route>
      </Routes>
      {ToastContainerSuccess}
      {ToastContainerError}
    </div>
  );
}

export default App;
