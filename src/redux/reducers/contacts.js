import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { addContact, deleteContact } from "../actions/contacts";
import { fetchContacts, addContact, deleteContact } from "../operations";
const initialState = [];

// const contactsReducer = createReducer(initialState, {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter((contact) => action.payload !== contact.id),
// });
const entities = createReducer(initialState, {
  [fetchContacts.fulfilled]: (_, action) => [...action.payload],
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

// const addContactReducer = createReducer([], {
//   [addContact.fulfilled]: (state, action) => [...state, ...action.payload],
// });

export default combineReducers({
  entities,
  isLoading,
  error,
});
// export default contactsReducer;
