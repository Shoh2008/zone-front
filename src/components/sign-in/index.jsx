import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getusers } from "../../redux/reducer/users";

const SignIn = () => {
  const [user, setuser] = useState({});
  const {
    users: { users },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getusers());
  }, []);

  function submit() {
    if (user.username && user.password) {
      users.map((item) => {
        if (
          item.username === user.username ||
          item.password === user.password
        ) {
          localStorage.setItem("dashboardUserId", item.id);
          navigate("/");
        }
      });
    }
  }

  return (
    <Block>
      <Box>
        <h2>Sign In</h2>
        <input
          placeholder="Name"
          onChange={(e) => setuser((p) => ({ ...p, username: e.target.value }))}
        />
        <input
          placeholder="Password"
          onChange={(e) => setuser((p) => ({ ...p, password: e.target.value }))}
        />
        <div>
          <button onClick={() => navigate("/sign-up")}>Sign Up</button>
          <button onClick={submit}>Sign In</button>
        </div>
      </Box>
    </Block>
  );
};

export default SignIn;
