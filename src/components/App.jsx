import Wrapper from 'components/Wrapper/Wrapper';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';
import { useSelector } from 'react-redux';
//import { getContacts } from 'redux/ContactSlice/contactSlice';
import { getItems } from 'redux/contacts/contactsSelectors';

const App = () => {
  const contacts = useSelector(getItems);

  return (
    <Wrapper>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notification message="There are no contacts yet" />
        )}
      </Section>
    </Wrapper>
  );
};

export default App;
