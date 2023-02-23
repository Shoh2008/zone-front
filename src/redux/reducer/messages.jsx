import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api-call";

const messages = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },
  reducers: {
    getMessages: (state, action) => {
      state.messages = action.payload;
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action) => {
      state.messages.map((item, index) => {
        if (item.id === action.payload.id) {
          state.messages.splice(index, 1);
        }
      });
    },
    error: () => { },
  },
});

export const getMessages = () =>
  apiCall({
    url: "/chat",
    method: "get",
    onSuccess: "messages/getMessages",
  });

export const sendMessage = (data) =>
  apiCall({
    url: "/chat",
    method: "post",
    onSuccess: "messages/sendMessage",
    data,
  });

export const deleteMessage = (data) =>
  apiCall({
    url: "/chat/" + data.id,
    method: "delete",
    onSuccess: "messages/deleteMessage",
    data,
  });

export default messages.reducer;
