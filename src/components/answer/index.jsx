import React, { useEffect, useState } from "react";
import { Block } from "./style";
import { toast, ToastContainer } from "react-toastify";
import { gettask, postanswer, deletetask, setTask } from "../../redux/reducer/tasks";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getusers } from "../../redux/reducer/users";

const Answer = () => {
  const [state, setstate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    users: { user, users },
    tasks: { task },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getusers());
    dispatch(gettask(id));
  }, []);

  const create = () => {
    if (state !== "") {
      dispatch(getusers());
      dispatch(
        postanswer({ task_id: task.id, author_id: user.id, answer: state })
      );
      toast.success("Wow so easy created!", {
        autoClose: 300,
        onClose: () => {
          setstate("");
        },
        theme: "dark",
      });
    }
  };

  const editor = (task) => {
    dispatch(setTask(task));
    navigate("/task-editor");
  };

  const deleter = (id) => {
    dispatch(deletetask(id));
    navigate("/tasks");
  };

  return (
    <Block>
      <div className="card">
        <div className="task break">{task.task}</div>
        <div className="tool">
          <div>
            <div className="count">
              <i className="bi bi-body-text"></i> {task?.answers?.length}
            </div>
          </div>

          {task.author === user.username ? (
            <div className="action">
              <button onClick={() => deleter(task.id)}>
                <i className="bi bi-file-earmark-excel"></i>
                <span>Delete</span>
              </button>
              <button onClick={() => editor(task)}>
                <i className="bi bi-pen"></i>
                <span>Edit</span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {task?.answers?.map((item, index) => (
        <div className="card mt-2" key={index}>
          <div className="user break">{users.map(e => e.id === item.author_id ? e.username : "")}</div>
          <div className="line break">{item.answer}</div>
        </div>
      ))}
      <div className="card mt-2">
        <div className="user break">{user.username}</div>
        <textarea
          className="task"
          placeholder="Type here..."
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
      </div>
      <button className="createbtn" onClick={create}>
        Answer
      </button>
      <ToastContainer />
    </Block>
  );
};

export default Answer;
