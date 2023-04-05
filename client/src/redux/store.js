import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducer/usersSlice";
import winnerSlice from "./reducer/winnerSlice";
const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    winner: winnerSlice.reducer,
  },
});
export default store;
