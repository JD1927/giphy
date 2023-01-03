import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Go to another route
    onSubmit({searchValue});
  };
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Let's have fun..."
        onChange={handleChange}
        type="text"
        value={searchValue}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default React.memo(SearchForm);
