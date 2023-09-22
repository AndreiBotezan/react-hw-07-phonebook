import Wrapper from 'components/Wrapper/Wrapper';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Wrapper>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer autoClose={3000} theme="colored" />
    </Wrapper>
  );
}

export default App;
