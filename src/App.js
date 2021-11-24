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
  const [contacts, setContacts] = useState([]);
  const [filters, setFilters] = useState('');

  const formSubmitHandler = (name, number) => {
    console.log(name, number);
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
    console.log(contacts);
    toast.success('The contact is added to the phonebook.', {
      transition: Flip,
    });
  };

  // switch (data) {
  //   case contacts.some(
  //     ({ name }) => name.toLowerCase() === data.name.toLowerCase(),
  //   ):
  //     toast.warn(`${data.name} is already in your phonebook`, {
  //       transition: Bounce,
  //     });
  //     break;
  //   case
  // }
  useEffect(() => {
    console.log(contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, []);

  // formSubmitHandler = data => {
  //   if (
  //     this.state.contacts.some(
  //       ({ name }) => name.toLowerCase() === data.name.toLowerCase(),
  //     )
  //   ) {
  //     toast.warn(`${data.name} is already in your phonebook`, {
  //       transition: Bounce,
  //     });
  //     return;
  //   } else {
  //     this.setState(({ contacts }) => ({
  //       contacts: [
  //         ...contacts,
  //         {
  //           id: shortid.generate(),
  //           ...data,
  //         },
  //       ],
  //     }));
  //     toast.success('The contact is added to the phonebook.', {
  //       transition: Flip,
  //     });
  //   }
  // };

  useEffect(() => {
    const contactsForParcing = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsForParcing);
    console.log(parsedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  const deleteContact = idContacts => {
    toast('Deleted', { autoClose: 3000, transition: Zoom });
    setContacts(contacts => {
      contacts.filter(({ id }) => {
        return id !== idContacts;
      });
    });
  };

  const changeFilter = e => {
    return setFilters(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filters.toLowerCase()),
    );
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
