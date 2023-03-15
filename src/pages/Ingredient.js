import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../styles/cocktailAlpha.css';

function Ingredient() {
  const [cocktails, setCocktails] = useState([]);
  const { ingredient } = useParams();

  useEffect(() => {
    async function fetchCocktails() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setCocktails(data.drinks);
      console.log(data)
    }

    fetchCocktails();
  }, []);

  return (
    <div className='cocktails'>
      <Link to="/"> <h2 id="home-btn">Back Home</h2>
</Link>
      <h1 className='section-heading'>Cocktails made with {ingredient}</h1>
      <ul className='cocktail-grid'>
        {cocktails.map(cocktail => (
          <div className='cocktail'>
         <Link to={`/${cocktail.strDrink}`}><img src={cocktail.strDrinkThumb} alt = {cocktail.strDrink} className='rounded' height='200px'/> <li key={cocktail.idDrink}>{cocktail.strDrink}</li></Link>
         </div>
        ))}
      </ul>
    </div>
  );
}

export default Ingredient;
