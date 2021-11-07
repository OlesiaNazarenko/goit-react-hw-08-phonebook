import React, {Component} from 'react';
import shortid from 'shortid';
import s from 'components/contactForm/ContactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number:'',
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();
    
    handleChange = e => {
        this.setState({
        [e.currentTarget.name]:e.currentTarget.value
        })
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();;
    }
    reset = () => {
        this.setState({ name: " ", number: "", })
    }
    render() {
       return(
       <form onSubmit={this.handleSubmit} className={s.contactsForm}>
            <label htmlFor={this.nameInputId} className={s.label}>Name
                   <input id={this.nameInputId}
                    className={s.input}
                    type="text"
                    name="name"
                    value={this.state.name}
                    autoComplete="off"
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
            />
            </label>
            <label htmlFor={this.numberInputId} className={s.label}>Number
                   <input id={this.numberInputId}
                    className={s.input}
                    type="tel"
                    name="number"
                    value={this.state.number}
                    autoComplete="off"
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
            />
            </label>
            <button type="submit" className={s.contactsFormBtn}>Add contact</button>
        </form>
    )
   }
    
}

export default ContactForm;