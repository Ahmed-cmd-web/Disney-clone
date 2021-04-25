/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./reducer";



const store = configureStore({
  reducer: {
    r: userreducer,
  },
});

export default store;
