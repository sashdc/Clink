import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import "../styles/cocktailAlpha.css";
import '../styles/grid.css'
import NavTabs from "../components/NavTabs";

function Ingredient() {
  const [cocktails, setCocktails] = useState([]);
  const { ingredient } = useParams();

  useEffect(() => {
    async function fetchCocktails() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
      console.log(data);
    }

    fetchCocktails();
  }, []);

  return (
    <div>
            <img className="background" src="../images/bottles.jpg" />

    <div className="grid-page">

      <NavTabs />

      <h1 className="section-heading">Drinks made with {ingredient}</h1>
      <ul className="grid-section">
        {cocktails.map((cocktail) => (
          <div className="grid-item">
            <Link to={`/${cocktail.strDrink}`}>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="rounded"
                height="200px"
              />{" "}
                {/* {cocktail.strAlcoholic === "Alcoholic" ? <p className='cocktail-name'>{cocktail.strDrink} (Cocktail)</p> : <p className='cocktail-name'>{cocktail.strDrink} (Mocktail)</p>} */}
                <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Ingredient;
