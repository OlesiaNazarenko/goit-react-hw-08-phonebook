import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
function Filter({ changeFilter }) {
  const [filter, setFilter] = useState('');
  const handleOnChange = e => {
    const inputText = e.target.value;
    setFilter(inputText);
    changeFilter(inputText);
  };

  return (
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
  );
}
Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
export default Filter;
