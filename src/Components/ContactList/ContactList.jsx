import { useSelector } from "react-redux";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/Contacts/contactsSlice";
import PropTypes from "prop-types";

import ContactItem from "../ContactItem/ContactItem";
import Button from "../Utils/Button/Button";
import { MdDeleteForever } from "react-icons/md";
import { List, Item } from "./Contacts.styled";

function ContactList() {
  const { data: contactList } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector((state) => state.filter);
  const contacts = contactList?.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <List>
        {contactList &&
          contacts.map((contact) => (
            <Item key={contact.id}>
              <ContactItem contact={contact} />
              <Button
                title="Remove from contacts"
                text={<MdDeleteForever color="#ff4f4f" size={30} />}
                type="button"
                onClick={() => deleteContact(contact.id)}
              />
            </Item>
          ))}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
