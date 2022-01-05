import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../contactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';
import { getAllContacts } from '../../redux/contacts/contacts-operations';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import s from '../phonebookHome/PhonebookHome.module.css';
function PhonebookHome() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <div className={s.mainDiv}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {isLoadingContacts && <h2>downloading...</h2>}
      {!isLoadingContacts && (
        <>
          <h2 className={s.titleh2}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
export default PhonebookHome;
