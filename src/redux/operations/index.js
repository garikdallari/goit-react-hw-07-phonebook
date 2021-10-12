import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  createContact,
  removeContact,
} from "../../services/contacts-api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => await getContacts()
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => await createContact(contact)
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => await removeContact(id)
);
