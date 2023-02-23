import React, { useState } from "react";
import { Block } from "./style";
import { toast, ToastContainer } from "react-toastify";
import { posttask } from "../../redux/reducer/tasks";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getusers } from "../../redux/reducer/users";

const Create = () => {
  const [state, setstate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    users: { user },
  } = useSelector((state) => state);

  const create = () => {
    if (state !== "") {
      dispatch(getusers());
      dispatch(posttask({ author_id: user.id, task: state }));
      toast.success("Wow so easy created!", {
        autoClose: 500,
        onClose: () => {
          navigate("/tasks");
        },
        theme: "dark",
      });
    }
  };

  return (
    <Block>
      <div className="card">
        <textarea
          className="task"
          placeholder="Type here..."
          onChange={(e) => setstate(e.target.value)}
        />
      </div>
      <button className="createbtn" onClick={create}>
        Submit
      </button>
      <ToastContainer />
    </Block>
  );
};

export default Create;
