import s from './ContactList.module.css';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { delete_contact } from '../../redux/contacts/contacts-actions.js';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors.js';
toast.configure();
function ContactList() {
  const data = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.ContactList}>
      {data.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.ContactListItem}>
            <span className={s.ContactListSpan}>{name}</span>
            <span className={s.ContactListSpan}>{number}</span>
            <button
              key={id}
              className={s.btnDelete}
              type="button"
              onClick={() => {
                dispatch(delete_contact(id));
                toast('Deleted', { autoClose: 3000, transition: Zoom });
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
