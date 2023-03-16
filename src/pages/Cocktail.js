// import React from 'react'
import React, { useState, useEffect } from "react";
import '../styles/recipe.css'
import "animate.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Shaker from "../components/Shaker";
import NavTabs from "../components/NavTabs";



const Cocktail = () => {
  const [error, setError] = useState(null);
  const { cocktail } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [drink, setDrink] = useState();
  const apiUrl = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDrink(result.drinks[0]);
          console.log(result.drinks[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Shaker />;
  } else {
    return (
    <div>
            <div className="recipe-page">
            <NavTabs />
      <div className="drink-card animate__animated animate__jackInTheBox">
      {/* <a href="/random" > <h2>Random Again</h2>
</a> */}

    <h1> {drink.strDrink}</h1>
    <h3>{drink.strCategory} ({drink.strAlcoholic})</h3>
    ;
    <img className = 'drink-image animate__animated animate__jello' src={drink.strDrinkThumb} alt={drink.strDrink}></img>
    <ul className="card-ingredients">
    <li>{drink.strIngredient1} - {drink.strMeasure1}</li>
    {/* map over ingredients and render ingredient and measure */}
  
    
    {drink.strIngredient2 ? <li>{drink.strIngredient2} - {drink.strMeasure2}</li> : null}
    {drink.strIngredient3 ? <li>{drink.strIngredient3} - {drink.strMeasure3}</li> : null}
    {drink.strIngredient4 ? <li>{drink.strIngredient4} - {drink.strMeasure4}</li> : null}
    {drink.strIngredient5 ? <li>{drink.strIngredient5} - {drink.strMeasure5}</li> : null}
    {drink.strIngredient6 ? <li>{drink.strIngredient6} - {drink.strMeasure6}</li> : null}
    {drink.strIngredient7 ? <li>{drink.strIngredient7} - {drink.strMeasure7}</li> : null}
    {drink.strIngredient8 ? <li>{drink.strIngredient8} - {drink.strMeasure8}</li> : null}
    {drink.strIngredient9 ? <li>{drink.strIngredient9} - {drink.strMeasure9}</li> : null}
    {drink.strIngredient10 ? <li>{drink.strIngredient10} - {drink.strMeasure10}</li> : null}
    {drink.strIngredient11 ? <li>{drink.strIngredient11} - {drink.strMeasure11}</li> : null}
    {drink.strIngredient12 ? <li>{drink.strIngredient12} - {drink.strMeasure12}</li> : null}
    {drink.strIngredient13 ? <li>{drink.strIngredient13} - {drink.strMeasure13}</li> : null}
    {drink.strIngredient14 ? <li>{drink.strIngredient14} - {drink.strMeasure14}</li> : null}
    {drink.strIngredient15 ? <li>{drink.strIngredient15} - {drink.strMeasure15}</li> : null}
    {drink.strIngredient16 ? <li>{drink.strIngredient16} - {drink.strMeasure16}</li> : null}

    </ul>
    <h2>{drink.strInstructions}</h2>

    </div>
    </div>
    </div>
  )}
}

export default Cocktail