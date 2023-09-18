import { useDispatch, useSelector } from 'react-redux';
//import { getContacts, changeFilter, deleteContact} from 'redux/ContactSlice/contactSlice';
import { actions } from '../../redux/contacts/contactsActions';
import { getItems, getFilter } from 'redux/contacts/contactsSelectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(actions.deleteContact(contactId));
  };

  return (
    <ul className={s.contacts}>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filterValue.trim()))
        .map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <div>
              <p className={s.name}>{name}</p>
              <p className={s.number}>{number}</p>
            </div>
            <button
              type="button"
              onClick={() => handleDeleteContact(id)}
              className={s.delete}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
