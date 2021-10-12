import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "../../services/contacts-api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await getContacts();
    return contacts;
  }
);
