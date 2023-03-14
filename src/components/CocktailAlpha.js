import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const CocktailAlpha = () => {
  const [cocktails, setCocktails] = useState([]);
  const { letter } = useParams();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(response => response.json())
      .then(data => setCocktails(data.drinks))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Cocktails beginning with {letter}</h1>
      {/* back to alphabet list */}
      <Link to="/list">Back to Alphabet List</Link>
      <ul className=''>
        {cocktails.map(cocktail => (
           <Link to={`/${cocktail.strDrink}`}>
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
          <img src={cocktail.strDrinkThumb} alt = {cocktail.strDrink} className='rounded' height='200px'/>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CocktailAlpha