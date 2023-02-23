import React, { useEffect } from "react";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { deletetask, gettasks, setTask } from "../../redux/reducer/tasks";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    tasks: { tasks },
    users: { user },
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
      {tasks
        .filter((item) => (item ? item.author === user.username : item))
        .map((item, index) => (
          <div className="card" key={index}>
            <div className="user break">{item.author}</div>
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
                {item.author === user.username ? (
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
        ))}
    </Block>
  );
};

export default Posts;
