import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { addContact, deleteContact } from "../actions/contacts";
import { fetchContacts } from "../operations";
const initialState = [];

// const contactsReducer = createReducer(initialState, {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter((contact) => action.payload !== contact.id),
// });
const entities = createReducer(initialState, {
  [fetchContacts.fulfilled]: (_, action) => [...action.payload],
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
// export default contactsReducer;
