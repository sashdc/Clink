import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const Bar = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then(response => response.json())
      .then(data => setIngredients(data.drinks))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>List of Ingredients</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.strIngredient1}>
            <Link to={`/ingredients/${ingredient.strIngredient1}`}>{ingredient.strIngredient1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bar

function CocktailList() {
  const { ingredient } = useParams();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then(response => response.json())
      .then(data => setCocktails(data.drinks))
      .catch(error => console.error(error));
  }, [ingredient]);

  return (
    <div>
      <h2>List of Cocktails with {ingredient}</h2>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        ))}
      </ul>
    </div>
  );
}

export { Bar, CocktailList };
