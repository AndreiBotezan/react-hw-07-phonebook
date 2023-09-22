import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsApi';
import Label from './Label/Label';
import InputName from './InputName/InputName';
import InputNumber from './InputNumber/InputNumber';
import Button from 'components/Button/Button';
import { toast } from 'react-toastify';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '' });

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleNameChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const handlePhoneChange = phoneValue => {
    setForm(prevForm => ({ ...prevForm, phone: phoneValue }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Rules for fields
    if (form.name === '' && form.phone === '') {
      return toast.warn('Enter data of contact');
    }
    if (form.name === '') {
      return toast.warn('Enter the name of contact');
    }

    if (form.phone === '') {
      return toast.warn('Enter the phone number of contact');
    }

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === form.name.toLowerCase()
      )
    ) {
      resetForm();
      return toast.info(`${form.name} is already in contacts`);
    }

    toast.success(`${form.name} is added to your contacts`);
    addContact(form);
    resetForm();
  };

  const resetForm = () => {
    setForm({ name: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Label labelTitle={'Name'}>
        <InputName name={form.name} onNameChange={handleNameChange} />
      </Label>

      <Label labelTitle={'Number'}>
        <InputNumber phone={form.phone} onNumberChange={handlePhoneChange} />
      </Label>

      <Button type={'submit'} symbol={'+'} title={'Add contact'} />
    </form>
  );
};

export default ContactForm;
