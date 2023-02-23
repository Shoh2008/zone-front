import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import { postuser } from "../../redux/reducer/users";

const SignUp = () => {
  const [user, setuser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submit() {
    if (user.username && user.lastname && user.password) {
      localStorage.setItem("dashboardUserId", "");
      dispatch(postuser(user));
      navigate("/");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("dashboardUserId")) {
      navigate("/");
    }
  }, []);

  return (
    <Block>
      <Box>
        <h2>Sign Up</h2>
        <div>
          <input
            placeholder="Name"
            onChange={(e) =>
              setuser((p) => ({ ...p, username: e.target.value }))
            }
            maxLength="30"
          />
          <input
            placeholder="Last Name"
            onChange={(e) =>
              setuser((p) => ({ ...p, lastname: e.target.value }))
            }
            maxLength="30"
          />
          <input
            placeholder="Password"
            onChange={(e) =>
              setuser((p) => ({ ...p, password: e.target.value }))
            }
            maxLength="10"
          />
        </div>
        <div>
          <input
            placeholder="Age"
            onChange={(e) => setuser((p) => ({ ...p, age: e.target.value }))}
            maxLength="2"
          />
          <input
            placeholder="Address"
            onChange={(e) =>
              setuser((p) => ({ ...p, address: e.target.value }))
            }
            maxLength="30"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setuser((p) => ({ ...p, email: e.target.value }))}
            maxLength="30"
          />
        </div>
        <div>
          <input
            className="link"
            placeholder="Github Profile Link"
            onChange={(e) => setuser((p) => ({ ...p, github: e.target.value }))}
          />
          <input
            className="link"
            placeholder="Portfolio Link"
            onChange={(e) =>
              setuser((p) => ({ ...p, portfolio: e.target.value }))
            }
          />
        </div>
        <div>
          <textarea
            placeholder="About You"
            onChange={(e) => setuser((p) => ({ ...p, about: e.target.value }))}
          />
        </div>
        <div>
          <button onClick={() => navigate("/sign-in")}>Sign In</button>
          <button onClick={submit}>Sign Up</button>
        </div>
      </Box>
    </Block>
  );
};

export default SignUp;
