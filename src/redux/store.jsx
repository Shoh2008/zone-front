import { configureStore } from "@reduxjs/toolkit";
import users from "../redux/reducer/users";
import tasks from "../redux/reducer/tasks";
import messages from "../redux/reducer/messages";
import api from "./middleware/api";

export default configureStore({
  reducer: { users, tasks, messages },
  middleware: [api],
});
