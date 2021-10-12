import axios from "axios";

export const getContacts = async () => {
  const { data } = await axios.get("http://localhost:7777/contacts");
  return data;
};
