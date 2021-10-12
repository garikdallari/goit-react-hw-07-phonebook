import axios from "axios";

export const getContacts = async () => {
  const { data } = await axios.get("http://localhost:7777/contacts");
  return data;
};

export const createContact = async (contact) => {
  const { data } = await axios.post("http://localhost:7777/contacts", contact);
  return data;
};

export const removeContact = async (id) => {
  await axios.delete(`http://localhost:7777/contacts/${id}`);
  return id;
};
