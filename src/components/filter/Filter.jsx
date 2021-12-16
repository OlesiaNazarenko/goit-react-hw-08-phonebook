import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors.js';
import {search_contact } from '../../redux/contacts/actions.js';
import s from './Filter.module.css';
function Filter() {
   const filter = useSelector(getFilter);
   console.log(filter)

  const dispatch = useDispatch();
  const handleOnChange = e => {
       console.log(e.target.value)
   dispatch(search_contact(e.target.value))
  };

  return (
    <label>
      Find contacts by name
      <input
        className={s.seacrhInput}
        type="text"
        placeholder="Enter a name"
        value={filter}
        onChange ={handleOnChange}
      />
    </label>
  );
}

export default Filter;
