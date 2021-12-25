import axios from 'axios';
import add_contact from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../services/contacts-api';

const getContacts = () => async dispatch => {
  dispatch(add_contact());
  try {
    const contacts = fetchContacts();
    dispatch(add_contact(contacts));
  } catch (error) {
    alert('error');
  }
};
