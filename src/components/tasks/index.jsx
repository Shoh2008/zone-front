import React, { useEffect } from "react";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { Bounce } from "react-reveal";
import { deletetask, gettasks, setTask } from "../../redux/reducer/tasks";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    tasks: { tasks },
    users: { user, users },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(gettasks());
  }, []);

  const editor = (task) => {
    dispatch(setTask(task));
    navigate("/task-editor");
  };

  const deleter = (id) => {
    dispatch(deletetask(id));
  };

  return (
    <Block>
      {tasks.map((item, index) => (
        <Bounce left key={index}>
          <div className="card">
            <div className="user break">{users.map(e => e.id === item.author_id ? e.username : "")}</div>
            <div className="task break">{item.task}</div>
            <div className="tool">
              <div>
                <div className="count">
                  <i className="bi bi-body-text"></i> {item.answers.length}
                </div>
              </div>

              <div className="action">
                <button
                  className="likes"
                  onClick={() => navigate(`/answer/${item?.id}`)}
                >
                  <i className="bi bi-chat-text"></i>
                  <span>Answer</span>
                </button>
                {item.author_id === user.id ? (
                  <>
                    <button onClick={() => deleter(item.id)}>
                      <i className="bi bi-file-earmark-excel"></i>
                      <span>Delete</span>
                    </button>
                    <button onClick={() => editor(item)}>
                      <i className="bi bi-pen"></i>
                      <span>Edit</span>
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </Bounce>
      ))}
    </Block>
  );
};

export default Tasks;
