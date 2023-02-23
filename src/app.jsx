import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { LayOut, NavbarLeft, Component, Block, NavbarTop } from "./style";
import Boardlink from "./utils/boardlink";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "./redux/reducer/users";
import Profile from "./components/profile";
import Tasks from "./components/tasks";
import Status from "./components/status";
import Create from "./components/create";
import Chat from "./components/chat";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";
import Editor from "./components/editor";
import Answer from "./components/answer";
import TaskEditor from "./components/taskeditor";
import Posts from "./components/posts";
import Users from "./components/users";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [key, setkey] = useState(false);
  const {
    users: { user },
  } = useSelector((state) => state);

  useEffect(() => {
    if (!localStorage.getItem("dashboardUserId")) {
      navigate("/sign-up");
    }
    dispatch(getusers());
  }, []);

  return (
    <LayOut>
      {location.pathname !== "/sign-up" &&
      location.pathname !== "/sign-in" &&
      location.pathname !== "/editor" ? (
        <>
          <button
            className="menu_btn"
            style={key === false ? { transform: "rotate(-225deg)" } : {}}
            onClick={() => setkey((p) => !p)}
          >
            ※
          </button>
          <NavbarLeft style={key === false ? { left: "-100%" } : { left: "0" }}>
            <div>
              <div className="name">
                <h1>Zone</h1>
              </div>
              <div className="body">
                <Boardlink icon={"person"} title={"Profile"} />
                <Boardlink icon={"patch-question"} title={"Tasks"} />
                <Boardlink icon={"bar-chart-line"} title={"Status"} />
                <Boardlink icon={"patch-plus"} title={"Create"} />
                <Boardlink icon={"chat-dots"} title={"Chat"} />
              </div>
            </div>
            <div className="foot">
              <button
                onClick={function logout() {
                  localStorage.clear();
                  navigate("/sign-in");
                }}
              >
                <p>Log Out</p>
              </button>
            </div>
          </NavbarLeft>
          <Block>
            <NavbarTop>
              <h2>
                Hello{" "}
                {user?.username?.charAt(0)?.toUpperCase() +
                  user?.username?.substring(1, 50)}{" "}
                👋
              </h2>
              <div className="user">
                <span>{user?.username?.charAt(0)}</span>
                <div className="title">
                  <b>{user?.username}</b>
                  <p>{user?.lastname}</p>
                </div>
              </div>
            </NavbarTop>
            <Component>
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/answer/:id" element={<Answer />} />
                <Route path="/users/:id" element={<Users />} />
                <Route path="/status" element={<Status />} />
                <Route path="/task-editor" element={<TaskEditor />} />
                <Route path="/create" element={<Create />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/posts" element={<Posts />} />
              </Routes>
            </Component>
          </Block>
        </>
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </LayOut>
  );
};

export default App;
