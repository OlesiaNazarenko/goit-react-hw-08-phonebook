import React, { useEffect } from 'react';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import ContactForm from './components/contactForm/ContactForm';
import { getAllContacts } from 'redux/contacts/contacts-operations';
import { getLoading } from './redux/contacts/contacts-selectors';
function App() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <div className={s.mainDiv}>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoadingContacts && <h2>downloading...</h2>}
      {!isLoadingContacts && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
export default App;
