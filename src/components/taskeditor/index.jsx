import React from "react";
import { Block } from "./style";
import { puttask, setTask } from "../../redux/reducer/tasks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TaskEditor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    tasks: { oldtask },
  } = useSelector((state) => state);

  const setting = (e) => {
    dispatch(setTask({ ...oldtask, task: e }));
  };

  const editor = () => {
    dispatch(puttask(oldtask));
    navigate("/tasks");
  };

  return (
    <Block>
      <div className="card">
        <textarea
          className="task"
          placeholder="Type here..."
          value={oldtask.task}
          onChange={(e) => setting(e.target.value)}
        />
      </div>
      <button className="createbtn" onClick={editor}>
        Edit Task
      </button>
    </Block>
  );
};

export default TaskEditor;
