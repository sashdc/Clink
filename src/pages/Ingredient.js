import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import "../styles/cocktailAlpha.css";
import '../styles/grid.css'
import NavTabs from "../components/NavTabs";
import Search from "../components/Search";


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
  }, [ingredient]);

  return (
    <div>
    {/* <img
        className="background"
        src="../images/bar.webp"
        alt="a bar with bottles on the shelves lit with red neon bar sign"
      /> */}
    <div className="grid-page">

      <NavTabs />
      <Search />
      <h1 className="section-heading">Drinks made with {ingredient}</h1>
      <ul className="grid-section">
        {cocktails.map((cocktail) => (
          <div className="grid-item animate__bounceIn">
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
