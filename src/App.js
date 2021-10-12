import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Container from "./Components/Utils/Container/Container";
import Title from "./Components/Utils/Title/Title";

function App() {
  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  //   if (contacts.length === 0) {
  //     localStorage.removeItem("contacts");
  //   }
  // }, [contacts]);

  return (
    <Container>
      <Title color="#424242" size={30} text="Phonebook" />
      <div
        style={{
          border: "1px solid gray",
          width: "fit-content",
          padding: "20px",
        }}
      >
        <ContactForm />
      </div>
      <Filter />
      <Title marginT={40} size={20} text="Contacts" />
      <ContactList />
    </Container>
  );
}

export default App;
