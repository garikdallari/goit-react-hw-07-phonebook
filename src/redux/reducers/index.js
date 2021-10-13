import { combineReducers } from "redux";

import filter from "./filter";
import contacts from "./contacts";

export default combineReducers({
  contacts,
  filter,
});
