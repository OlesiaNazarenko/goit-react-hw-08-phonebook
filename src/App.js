// import 'react-native-get-random-values';
import React, { Component } from 'react';
import s from './App.module.css'

import shortid from 'shortid';
import ContactList from './components/contactList/ContactList';
// import Filter from './components/filter/Filter';
import ContactForm from './components/contactForm/ContactForm';

export default class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

 
  formSubmitHandler = data => {
    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        {
          id: shortid.generate(),
          ...data,
        },
      ],
    }));
  }


  deleteContact = (id) => {
    this.setState(({contacts}) => {
    contacts: contacts.filter(contact.id=>{return contact.id != id})
  })
}

  render() {
    return (
      <div className={s.mainDiv}>
        <h1>Phonebook</h1>
         <ContactForm onSubmit={this.formSubmitHandler}/>

        <h2>Contacts</h2>
        {/* <Filter  /> */}
        <ContactList data={this.state.contacts} onClick={ this.deleteContact}/>
      </div>
    )
  }
}
