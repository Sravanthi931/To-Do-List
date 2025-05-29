import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/To-Do-List/todoSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
  },
});

export default store;