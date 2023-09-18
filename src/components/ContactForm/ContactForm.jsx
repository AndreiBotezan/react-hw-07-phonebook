import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import {addContact, getContacts, changeFilter} from 'redux/ContactSlice/contactSlice';
import { actions } from '../../redux/contacts/contactsActions';
import { getItems, getFilter } from 'redux/contacts/contactsSelectors';
import Label from './Label/Label';
import InputName from './InputName/InputName';
import InputNumber from './InputNumber/InputNumber';
import Button from 'components/Button/Button';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getItems);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleContactInfo = () => {
    dispatch(actions.addContact(name, number));
    if (filterValue !== '') {
      dispatch(actions.changeFilter(''));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      if (filterValue !== '') {
        dispatch(actions.changeFilter(''));
      }

      return alert(`${name} is already in contacts`);
    }

    handleContactInfo();
    resetForm();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number': {
        setNumber(value);
        break;
      }

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Label labelTitle={'Name'}>
        <InputName name={name} onNameChange={handleChange} />
      </Label>

      <Label labelTitle={'Number'}>
        <InputNumber number={number} onNumberChange={handleChange} />
      </Label>

      <Button type={'submit'} title={'Add contact'} />
    </form>
  );
}

export default ContactForm;
