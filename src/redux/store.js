import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './contacts/contacts-reducers.js';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// const persistConfig = {
//   key: 'phonebook',
//   storage,
//   blacklist: ['filter'],
// };
const store = configureStore({
  reducer: {
    contacts:reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
// const persistor = persistStore(store);
export default store;
