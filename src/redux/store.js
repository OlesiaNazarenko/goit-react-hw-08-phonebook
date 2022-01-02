import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './contacts/contacts-reducers.js';
import AuthReducer from '../redux/authorization/auth-slice';
const store = configureStore({
  reducer: {
    contacts: reducer,
    auth: AuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
