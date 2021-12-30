import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './contacts/contacts-reducers.js';
const store = configureStore({
  reducer: {
    contacts: reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
