import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/search.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Search = () => {

const [searchTerm, setSearchTerm] = useState('');

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     const searchUrl = `/search/${searchTerm}`
//     window.open(searchUrl);
//   }

  return (
<div className='search-cont'>
    
    <form className='search-form' >
      <label htmlFor="search"></label>
      <input
      className='search-input'
        id="search"
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={handleInputChange}
      />
     <Link to={`/search/${searchTerm}`}> <button type="submit" className='search-button'>
    </button></Link>
    </form>
    </div>
  );
}

export default Search