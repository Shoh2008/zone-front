import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api-call";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
    friend: {},
  },
  reducers: {
    getData: (state, action) => {
      state.users = action.payload;
      action.payload.map((item) => {
        if (item.id === localStorage.getItem("dashboardUserId"))
          state.user = item;
      });
    },
    getOneData: (state, action) => {
      state.friend = action.payload;
    },
    postData: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("dashboardUserId", action.payload.id);
    },
    addPost: (state, action) => {
      const task = state.tasks.find((e) => e.id === action.payload.id);
      const index = state.tasks.indexOf(task);
      state.tasks[index].posts += 1;
    },
    putData: (state, action) => {
      const user = state.users.find((e) => e.id === action.payload.id);
      const index = state.users.indexOf(user);
      state.users.splice(index, 1, action.payload);
    },
    putUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    error: () => { },
  },
});

export const getusers = () =>
  apiCall({
    url: "/users",
    method: "get",
    onSuccess: "users/getData",
    onFail: "users/error",
  });

export const getuser = (id) =>
  apiCall({
    url: "/users/" + id,
    method: "get",
    onSuccess: "users/getOneData",
    onFail: "users/error",
  });

export const postuser = (data) =>
  apiCall({
    url: "/users",
    method: "post",
    onSuccess: "users/postData",
    onFail: "users/error",
    data,
  });

export const putuser = (data) =>
  apiCall({
    url: "/users/" + data.id,
    method: "put",
    onSuccess: "users/putData",
    onFail: "users/error",
    data,
  });

export const { putUser } = users.actions;
export default users.reducer;
