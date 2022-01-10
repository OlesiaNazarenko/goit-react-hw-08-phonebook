import '../../App.module.css';
import s from './ContactList.module.css';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors.js';
import { TiDelete } from 'react-icons/ti';
import { RiAccountPinCircleFill } from 'react-icons/ri';
toast.configure();
function ContactList() {
  const data = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.ContactList}>
      {data.length === 0 && (
        <p>
          There are no contacts in your phonebook. Please add something using a
          form you can find from above.
        </p>
      )}
      {data.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.ContactListItem}>
            <span className={s.ContactListIconSpan}>
              <RiAccountPinCircleFill className={s.ContactListIcon} />
            </span>
            <span className={s.ContactListSpan}>{name}</span>
            <span className={s.ContactListSpan}>{number}</span>
            <button
              key={id}
              className={s.btnDelete}
              type="button"
              onClick={() => {
                dispatch(deleteContacts(id));
                toast('Deleted', { autoClose: 3000, transition: Zoom });
              }}
            >
              <TiDelete className={s.deleteIcon} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
