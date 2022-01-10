import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors.js';
import { search_contact } from '../../redux/contacts/contacts-actions.js';
import '../../App.module.css';
import s from './Filter.module.css';
function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleOnChange = e => {
    dispatch(search_contact(e.target.value));
  };
  return (
    <form className={s.filterForm}>
      <label>
        Find contacts by name
        <input
          className={s.seacrhInput}
          type="text"
          placeholder="Enter a name"
          value={filter}
          onChange={handleOnChange}
        />
      </label>
    </form>
  );
}
export default Filter;
