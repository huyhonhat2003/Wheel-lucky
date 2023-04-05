import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    status: "ide",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "ide";
        state.data = action.payload;
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(delUsers.fulfilled, (state, action) => {
        state.data = state.data.filter((user) => user._id != action.payload);
      });
  },
});
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("http://localhost:3300/user");
  const data = await res.json();
  console.log(data);
  return data;
});
export const addUsers = createAsyncThunk("users/addUsers", async (newTodo) => {
  const payload = JSON.stringify(newTodo);
  const res = await fetch("http://localhost:3300/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });
  const data = await res.json();
  return data;
});
export const delUsers = createAsyncThunk("users/delUsers", async (_id) => {
  const payload = JSON.stringify(_id);
  console.log("payload", payload);
  const res = await fetch("http://localhost:3300/user/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });
  const data = await res.json();
  console.log(data);
  return data.idUserDeleted;
});
export default usersSlice;
