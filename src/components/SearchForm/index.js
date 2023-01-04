import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Go to another route
    if (searchValue === '') return;
    onSubmit({searchValue});
  };
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form className='SearchForm-form' onSubmit={handleSubmit}>
      <input
        className='SearchForm-input'
        placeholder="Let's have fun..."
        onChange={handleChange}
        type="text"
        value={searchValue}
      />
      <button
        disabled={searchValue === ''}
        className='SearchForm-button'
        type="submit">
        Search
      </button>
    </form>
  );
};

export default React.memo(SearchForm);
