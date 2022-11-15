import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import mailReducer from "./mailSlice";

const store = configureStore({
  reducer: {
    mail: mailReducer,
    authentication: authReducer,
  },
});

export default store;
