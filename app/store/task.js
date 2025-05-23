import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    data: null,
  },
  reducers: {
    setTasks: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload;
    },
    setToUpdate: (state) => {
      state.toUpdate = Math.random();
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTasks, setToUpdate } = taskSlice.actions;

export default taskSlice.reducer;
