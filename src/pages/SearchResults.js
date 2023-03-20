import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
// import '../styles/cocktailAlpha.css';
import NavTabs from "../components/NavTabs";
import '../styles/grid.css'

const SearchResults = () => {
  const [cocktails, setCocktails] = useState([]);
  const { searchTerm } = useParams();
  
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.error(error));
  }, []);

console.log(cocktails)
  return (
    <div className='grid-page'>
            <img className="background" src="../images/bottles.jpg" alt='bottles in a bar'/>
            <NavTabs />

      <h1 className='section-heading'>{searchTerm} search results</h1>

      <div className=''>
      <ul className='grid-section'>
       
       {cocktails.map(cocktail => (
           <div className='grid-item animate__animated animate__bounceIn'><Link to={`/${cocktail.strDrink}`}>
            <img src={cocktail.strDrinkThumb} alt = {cocktail.strDrink} className='rounded' height='200px'/>
            {/* if drnk is alcoholic show coktail, or mocktail if not */}
            {cocktail.strAlcoholic === "Alcoholic" ? <p className='cocktail-name'>{cocktail.strDrink} (Cocktail)</p> : <p className='cocktail-name'>{cocktail.strDrink} (Mocktail)</p>}
          {/* <li key={cocktail.idDrink}>{cocktail.strDrink}({cocktail.strAlcoholic})</li> */}
          
          </Link>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default SearchResults