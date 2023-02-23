import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import { getusers, putUser, putuser } from "../../redux/reducer/users";

const Editor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    users: { user },
  } = useSelector((state) => state);

  const submit = () => {
    if (user.username && user.lastname && user.password) {
      dispatch(putuser(user));
      navigate("/");
    }
  };
  const edit = (data) => {
    dispatch(putUser(data));
  };

  useEffect(() => {
    dispatch(getusers());
  }, []);

  return (
    <Block>
      <Box>
        <h2>Editor</h2>
        <div>
          <input
            placeholder="Name"
            onChange={(e) => edit({ username: e.target.value })}
            value={user?.username}
            maxLength="30"
          />
          <input
            placeholder="Last Name"
            onChange={(e) => edit({ lastname: e.target.value })}
            value={user?.lastname}
            maxLength="30"
          />
          <input
            placeholder="Password"
            onChange={(e) => edit({ password: e.target.value })}
            value={user?.password}
            maxLength="10"
          />
        </div>
        <div>
          <input
            placeholder="Age"
            onChange={(e) => edit({ age: e.target.value })}
            value={user?.age}
            maxLength="2"
          />
          <input
            placeholder="Address"
            onChange={(e) => edit({ address: e.target.value })}
            value={user?.address}
            maxLength="30"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => edit({ email: e.target.value })}
            value={user?.email}
            maxLength="30"
          />
        </div>
        <div>
          <input
            className="link"
            placeholder="Github Profile Link"
            onChange={(e) => edit({ github: e.target.value })}
            value={user?.github}
          />
          <input
            className="link"
            placeholder="Portfolio Link"
            onChange={(e) => edit({ portfolio: e.target.value })}
            value={user?.portfolio}
          />
        </div>
        <div>
          <textarea
            placeholder="About You"
            onChange={(e) => edit({ about: e.target.value })}
            value={user?.about}
          />
        </div>
        <div>
          <button onClick={() => navigate("/sign-in")}>Sign In</button>
          <button onClick={submit}>Edit Profile</button>
        </div>
      </Box>
    </Block>
  );
};

export default Editor;
