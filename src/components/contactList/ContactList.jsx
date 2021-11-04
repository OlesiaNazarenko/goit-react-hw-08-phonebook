import React from 'react';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css'

function ContactList({ data,deleteContact}) {
    return (
        
           data.map((data)=>{
               return (
                    <ul className={s.ContactList}>
                       <li id={data.id}>
                           <span className={s.ContactListSpan}>{ data.name}</span>
                           <span className={s.ContactListSpan}>{data.number}</span>
                           <button
                                className={s.btnDelete}
                                type="button" onClick={() => deleteContact(data.id)}
                               >
                                Delete
                            </button>
                        </li>
                    </ul>
               ) 
           }) 
        
    )
}

// ContactList.propTypes = {
//     data: PropTypes.arrayOf.isRequired,
// }
//  
export default ContactList;