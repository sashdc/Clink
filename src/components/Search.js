import React, { useState } from 'react';



const Search = () => {

const [searchTerm, setSearchTerm] = useState('');

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const searchUrl = `/search/${searchTerm}`
    window.open(searchUrl);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        placeholder="Search for a cocktail"
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search