import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import s from './App.module.css';
import { toast, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import * as actions from './redux/contacts/actions'
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import ContactForm from './components/contactForm/ContactForm';
toast.configure();
 function App() {

    const contacts = useSelector(state=>{return state.contacts});
       const filter = useSelector(state=>{return state.filter});
  const dispatch = useDispatch();

  // useEffect(() => {

  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // useEffect(() => {
  //   const contactsForParcing = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contactsForParcing);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

 
  
  return (
    <div className={s.mainDiv}>
      <h1>Phonebook</h1>
       <ContactForm  />
       <h2>Contacts</h2>
        <Filter value={filter} />
      <ContactList   />
    </div>
  );
}

export default App;