import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


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
    <div>
      <h1>Cocktails made with {ingredient}</h1>
      <ul>
        {cocktails.map(cocktail => (
         <Link to={`/${cocktail.strDrink}`}> <li key={cocktail.idDrink}>{cocktail.strDrink}</li></Link>
        ))}
      </ul>
    </div>
  );
}

export default Ingredient;
