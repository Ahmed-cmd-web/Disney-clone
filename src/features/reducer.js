/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userreducer = createSlice({
  name: "info",
  initialState,
  reducers: {
    userinfo: (state, action) => {
      state = [action.payload];
      return state;
    },
  },
});

export const { userinfo } = userreducer.actions;

export default userreducer.reducer;
