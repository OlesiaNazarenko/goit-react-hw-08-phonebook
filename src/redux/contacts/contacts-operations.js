import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../services/contacts-api';

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  fetchContacts,
);
export const addContacts = createAsyncThunk('contacts/addContact', addContact);
export const deleteContacts = createAsyncThunk(
  'contacts/addContact',
  deleteContact,
);
// const getContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());
//   try {
//     const contacts = fetchContacts();
//     dispatch(fetchContactSuccess());

//   } catch (error) {
//     dispatch(fetchContactError(error));
//     alert('error');
//   }
// };
