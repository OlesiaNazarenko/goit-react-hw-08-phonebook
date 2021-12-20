import React from 'react';
import s from './App.module.css';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import ContactForm from './components/contactForm/ContactForm';
import { getFilter } from './redux/contacts/contacts-selectors';
function App() {
  return (
    <div className={s.mainDiv}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={getFilter} />
      <ContactList />
    </div>
  );
}
export default App;
