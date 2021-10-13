import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/operations";
import PropTypes from "prop-types";

import ContactItem from "../ContactItem/ContactItem";
import Button from "../Utils/Button/Button";
import { MdDeleteForever } from "react-icons/md";
import { List, Item } from "./Contacts.styled";

function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(
    (state) => state.contactsReducer.contacts.entities
  );
  const filterValue = useSelector((state) => state.contactsReducer.filter);

  const contacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <List>
        {contacts.map((contact) => (
          <Item key={contact.id}>
            <ContactItem contact={contact} />
            <Button
              title="Remove from contacts"
              text={<MdDeleteForever color="#ff4f4f" size={30} />}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
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
