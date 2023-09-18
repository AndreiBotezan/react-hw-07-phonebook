import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      state.items.push({
        id: nanoid(6),
        name,
        number,
      });
    },
    prepare: contact => {
      return {
        payload: {
          id: nanoid(),
          ...contact,
        },
      };
    },
    deleteContact: (state, action) => ({
      ...state,
      items: state.items.filter(contact => contact.id !== action.payload),
    }),
    getContacts: (state, action) => ({ ...state, items: action.payload }),
    changeFilter: (state, action) => ({ ...state, filter: action.payload }),
  },
});

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const { addContact, deleteContact, changeFilter, getContacts } =
  contactSlice.actions;
  
export const contactSliceReducer = contactSlice.reducer;
