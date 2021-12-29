import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
export const add_contact = createAction(
  'contacts/ADD_CONTACT',
  ({ name, number }) => ({
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  }),
);
export const delete_contact = createAction('contacts/DELETE_CONTACT');
export const search_contact = createAction('contacts/SEARCH_CONTACT');

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');
