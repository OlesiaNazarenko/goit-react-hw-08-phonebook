import React, { useEffect, useState } from 'react';
import s from './App.module.css';
import { toast, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import ContactForm from './components/contactForm/ContactForm';
toast.configure();
export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filters, setFilters] = useState('');
  const formSubmitHandler = (name, number) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.warn(`${name} is already in your phonebook`, {
        transition: Bounce,
      });
      return;
    }
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };
    setContacts(prevState => [...prevState, contact]);
    toast.success('The contact is added to the phonebook.', {
      transition: Flip,
    });
  };
  useEffect(() => {
    console.log(contacts);
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  useEffect(() => {
    const contactsForParcing = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsForParcing);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  const getVisibleContacts = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filters.toLowerCase()),
    );
  };
  const deleteContact = idContacts => {
    const filteredContacts = contacts.filter(({ id }) => id !== idContacts);
    setContacts(filteredContacts);
    toast('Deleted', { autoClose: 3000, transition: Zoom });
  };

  const changeFilter = e => {
    return setFilters(e.currentTarget.value);
  };
  return (
    <div className={s.mainDiv}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filters} changeFilter={changeFilter} />
      <ContactList data={getVisibleContacts()} deleteContact={deleteContact} />
    </div>
  );
}
