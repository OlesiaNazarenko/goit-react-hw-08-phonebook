import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../services/contacts-api';
export const getAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (userData, thunkApi) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkApi) => {
    try {
      const contact = await addContact(contacts);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { id } = await deleteContact(contactId);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
