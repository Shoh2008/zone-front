import React, { useEffect } from "react";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../../redux/reducer/users";
import { useNavigate } from "react-router-dom";
import { gettasks } from "../../redux/reducer/tasks";

const Status = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    tasks: { tasks },
    users: { user, users },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getusers());
    dispatch(gettasks());
  }, []);

  const foo = (posts) => {
    if (posts >= 2000) {
      return "line gold";
    } else if (posts >= 1000) {
      return "line silver";
    } else if (posts >= 500) {
      return "line bronza";
    } else if (posts >= 100) {
      return "line border";
    } else {
      return "line";
    }
  };

  return (
    <Block>
      {users.map((item, index) => (
        <div
          className={foo(tasks.filter((e) => (e ? e.author_id === item.id : e)).length * 10)}
          key={index}
          onClick={item.id === user.id ? () => navigate("/") : () => navigate("/users/" + item.id)}
        >
          <span>{index + 1}</span>
          <div>
            {item.username} {item.lastname}
          </div>
          {tasks.filter((e) => (e ? e.author_id === item.id : e)).length * 10} 🏆
        </div>
      ))}
    </Block>
  );
};

export default Status;
