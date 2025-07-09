import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./markdownSlice"

const store = configureStore({
  reducer:{
    markdown:markdownReducer
  }
})

export default store;