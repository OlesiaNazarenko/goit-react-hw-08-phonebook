export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getVisibleContacts = state => {
  const contacts = getContacts(state.contacts);
  const filters = state.contacts.filter;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase()),
  );
};
