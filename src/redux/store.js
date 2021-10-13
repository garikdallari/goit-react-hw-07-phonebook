import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/index";

export default configureStore({
  reducer: {
    contactsReducer,
  },
});
