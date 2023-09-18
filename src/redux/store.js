import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import { contactSliceReducer } from './ContactSlice/contactSlice';
import contactsReducer from './contacts/contactsReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// Saving items to Local Storage
const itemsPersistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
};

const Store = configureStore({
  //reducer: { contacts: contactSliceReducer },
  reducer: {
    contacts: persistReducer(itemsPersistConfig, contactsReducer),
  },
  middleware,
  //devTools: process.env.NODE_ENV !== 'production',
});
const persistor = persistStore(Store);

export const store = { Store, persistor };