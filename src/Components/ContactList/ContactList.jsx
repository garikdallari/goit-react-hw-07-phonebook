import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions/contacts";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
import Button from "../Utils/Button/Button";
import { MdDeleteForever } from "react-icons/md";
import { List, Item } from "./Contacts.styled";

function ContactList({ contacts, onDeleteContact }) {
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
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const filterByName = (state) => {
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
};

const mapStateToProps = (state) => ({
  contacts: filterByName(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
