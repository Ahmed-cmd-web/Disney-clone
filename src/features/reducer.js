/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userreducer = createSlice({
  name: "info",
  initialState,
  reducers: {
    userinfo: (state, action) => {
      if (action.payload) {
        state = [action.payload];
        return state;
      } else {
        state = [];
        return [...state];
      }
    },
  },
});

export const { userinfo } = userreducer.actions;

export default userreducer.reducer;
