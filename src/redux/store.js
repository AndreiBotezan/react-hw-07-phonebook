import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsApi';
import { filterSlice } from './contacts/contactsSlice';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
