import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api-call";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    task: {},
    oldtask: {},
  },
  reducers: {
    getData: (state, action) => {
      state.tasks = action.payload.reverse().sort((a, b) => {
        if (a.posts > b.posts) return -1;
        if (a.posts < b.posts) return 1;
        return 0;
      });
    },
    getOneData: (state, action) => {
      state.task = action.payload;
    },
    postData: (state, action) => {
      state.tasks.unshift(action.payload);
    },
    postAnswer: (state, action) => {
      state.task = action.payload;
    },
    setTask: (state, action) => {
      state.oldtask = action.payload;
    },
    putData: (state, action) => {
      const task = state.tasks.find((e) => e.id === action.payload.id);
      const index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1, action.payload);
    },
    deleteData: (state, action) => {
      const task = state.tasks.find((e) => e.id === action.payload.id);
      const index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1);
    },
    error: () => { },
  },
});

export const gettasks = () =>
  apiCall({
    url: "/tasks",
    method: "get",
    onSuccess: "tasks/getData",
    onFail: "tasks/error",
  });

export const gettask = (id) =>
  apiCall({
    url: "/tasks/" + id,
    method: "get",
    onSuccess: "tasks/getOneData",
    onFail: "tasks/error",
  });

export const posttask = (data) =>
  apiCall({
    url: "/tasks",
    method: "post",
    onSuccess: "tasks/postData",
    onFail: "tasks/error",
    data,
  });

export const postanswer = (data) =>
  apiCall({
    url: "/tasks/answer/" + data.task_id,
    method: "post",
    onSuccess: "tasks/postAnswer",
    onFail: "tasks/error",
    data,
  });

export const puttask = (data) =>
  apiCall({
    url: "/tasks/" + data.id,
    method: "put",
    onSuccess: "tasks/putData",
    onFail: "tasks/error",
    data,
  });

export const deletetask = (id) =>
  apiCall({
    url: "/tasks/" + id,
    method: "delete",
    onSuccess: "tasks/deleteData",
    onFail: "tasks/error",
  });

export const { setTask } = tasks.actions;
export default tasks.reducer;
