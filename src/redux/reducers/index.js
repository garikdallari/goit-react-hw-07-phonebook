import { combineReducers } from "redux";

import filterReducer from "./filter";
import contactsReducer from "./contacts";

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
