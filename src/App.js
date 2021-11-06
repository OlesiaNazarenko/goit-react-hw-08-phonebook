import React, { Component } from 'react';
import s from './App.module.css'
import { toast,Zoom, Flip, Bounce} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import shortid from 'shortid';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import ContactForm from './components/contactForm/ContactForm';

toast.configure()

export default class App extends Component {
  state = {
  contacts: [],
  filter: ''
  }

  formSubmitHandler = data => {
    if (this.state.contacts.find(({ name }) => name === data.name)) {
      toast.warn(`${data.name} is already in your phonebook`, {
              transition: Bounce
            });
            return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [
          ...contacts,
          {
            id: shortid.generate(),
            ...data,
          },
        ],
      }));
      toast.success('The contact is added to the phonebook.', {transition: Flip})
        }
  }

  deleteContact = idContacts => {
    toast('Deleted', { autoClose: 3000,transition:Zoom, })
    this.setState(({contacts}) => ({
      contacts: contacts.filter(({ id })=>{return id !== idContacts})
    }))
}

  
  changeFilter = (e) => {
    this.setState({filter:e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const normalizefilter = this.state.filter.toLowerCase();
    return(this.state.contacts.filter((contact)=>{return contact.name.toLowerCase().includes(normalizefilter)}))
  }

  render() {
       return (
        <div className={s.mainDiv}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        <ContactList data={this.getVisibleContacts()} deleteContact={ this.deleteContact} />
      </div>
    )
  }
}
