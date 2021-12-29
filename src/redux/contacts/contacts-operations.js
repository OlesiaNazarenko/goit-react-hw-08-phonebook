import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../services/contacts-api';

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    const contacts = await fetchContacts();
    return { contacts };
  },
);
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async contacts => {
    const contact = await addContact(contacts);
    return { contact };
  },
);
export const deleteContacts = createAsyncThunk(
  'contacts/addContact',
  async contactId => {
    const { id } = await deleteContact(contactId);
    return { id };
  },
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
