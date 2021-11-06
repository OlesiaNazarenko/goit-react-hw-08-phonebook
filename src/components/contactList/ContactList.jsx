import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css'

function ContactList({ data, deleteContact, onClick}) {
    return (
        <ul className={s.ContactList}>
            {data.map(({id, name, number}) => {
                return (
                    <li key={id} className={s.ContactListItem}>
                        <span className={s.ContactListSpan}>{name}</span>
                        <span className={s.ContactListSpan}>{number}</span>
                        <button key={id}
                            className={s.btnDelete}
                            type="button" onClick={() => deleteContact(id)}
                        >
                            Delete
                        </button>
                    </li>
                   
                )
            })}
         </ul>
    )
}

ContactList.propTypes = {
    data: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}; 
export default ContactList;