import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/contactsSlice';
import BarLoader from 'react-spinners/BarLoader';
import Notification from 'components/Notification/Notification';
import sprite from '../../images/icons.svg';
import { toast } from 'react-toastify';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts, isLoading, isSuccess } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector(getFilter);

  const getContactsList = () => {
    if (filterValue === '') {
      return contacts;
    }

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
  };

  const items = getContactsList();

  return (
    <ul className={s.contacts}>
      {isLoading && (
        <div className={s.loader}>
          <BarLoader color={'#6495ed'} />
        </div>
      )}

      {isSuccess &&
        items.map(({ id, name, phone }) => (
          <li key={id} className={s.item}>
            <a href={`tel:${phone}`} className={s.contact}>
              <p className={s.name}>{name}</p>
              <p className={s.phone}>
                <svg className={s.phone_icon} aria-label="logo">
                  <use href={`${sprite}#phone`}></use>
                </svg>
                <span className={s.phone_number}>{phone}</span>
              </p>
            </a>
            <button
              type="button"
              onClick={() => {
                toast.success(`${name} is removed from your contacts`);
                deleteContact(id);
              }}
              className={s.delete}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </li>
        ))}

      {items && items.length === 0 && filterValue !== '' && (
        <Notification message="There are no matched contacts" />
      )}

      {items && items.length === 0 && filterValue === '' && (
        <Notification message="There are no contacts yet" />
      )}
    </ul>
  );
};

export default ContactList;
