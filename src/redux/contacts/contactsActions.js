import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', (name, number) => ({
  payload: {
    id: nanoid(6),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/Filter');

export const actions = { addContact, deleteContact, changeFilter };

// const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: nanoid(6),
//         name,
//         number,
//     }
// })

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// })

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload:value,
// })
