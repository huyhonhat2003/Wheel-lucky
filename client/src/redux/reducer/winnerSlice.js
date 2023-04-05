import { createSlice } from "@reduxjs/toolkit";
const addWinner = (state, action) => {
  state.push(action.payload);
};
const winnerSlice = createSlice({
  name: "winner",
  initialState: [],
  reducers: {
    addWinner,
  },
});

export default winnerSlice;
