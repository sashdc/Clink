import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/bar.css";
import "animate.css";


const Bar = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((response) => response.json())
      .then((data) => setIngredients(data.drinks))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="ingredients ">
      <Link to="/">
        {" "}
        <h2 id="home-btn">Back Home</h2>
      </Link>
      <h2>What's in your bar?</h2>
      <ul className="ingredient-grid animate__animated animate__fadeIn">
        {ingredients.map((ingredient) => (
          <li className="ingredient" key={ingredient.strIngredient1}>
            <Link to={`/ingredients/${ingredient.strIngredient1}`}>
              <img className="ingredient-img"
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png`}
                alt={ingredient.strIngredient1}
              />
              <p>{ingredient.strIngredient1}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bar;

function CocktailList() {
  const { ingredient } = useParams();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    )
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.error(error));
  }, [ingredient]);

  return (
    <div>
      <h2>List of Cocktails with {ingredient}</h2>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        ))}
      </ul>
    </div>
  );
}

export { Bar, CocktailList };
