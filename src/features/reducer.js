/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  currentlyviewed: [],
  recommend: [],
  new: [],
  originals: [],
  trending: [],
};

export const userreducer = createSlice({
  name: "info",
  initialState,
  reducers: {
    userinfo: (state, action) => {
      if (action.payload) {
        state.user = [action.payload];
        return state;
      } else {
        state.user = [];
        return state;
      }
    },
    movies: (state, action) => {
      switch (action.payload.type) {
        case "original":
          state.originals.push(action.payload);
          return state;
        case "recommend":
          state.recommend.push(action.payload);
          return state;

        case "new":
          state.new.push(action.payload);
          return state;
        case "trending":
          state.trending.push(action.payload);
          return state;
        default:
          return state;
      }
    },
    view: (state, action) => {
      state.currentlyviewed = [action.payload];
      return state;
    },
  },
});

export const { userinfo, movies,view } = userreducer.actions;
export const info = (state) => state.r;
export default userreducer.reducer;
