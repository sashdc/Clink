import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavTabs from "../components/NavTabs";
import Search from "../components/Search";

const CocktailAlpha = () => {
  const [cocktails, setCocktails] = useState([]);
  const { letter } = useParams();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.log(error));
  }, [letter]);

  return (
    <div className="grid-page">
      <NavTabs />
      <Search />

      <h1 className="section-heading">Drinks beginning with {letter}</h1>

      <div className="">
        <ul className="grid-section">
          {!cocktails ? (
            <Link to="/List">
            <h2 className="no-results">Seems there are no drinks starting with the letter {letter}, click here to go back and try another one.</h2>
            </Link>
          ) : (
            cocktails.map((cocktail) => (
              <div className="grid-item animate__animated animate__bounceIn" key={cocktail.idDrink}>
                <Link to={`/${cocktail.strDrink}`}>
                  <img
                    src={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                    className="rounded"
                    height="200px"
                  />
                  {cocktail.strAlcoholic === "Alcoholic" ? (
                    <p className="cocktail-name">
                      {cocktail.strDrink} (Cocktail)
                    </p>
                  ) : (
                    <p className="cocktail-name">
                      {cocktail.strDrink} (Mocktail)
                    </p>
                  )}
                </Link>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CocktailAlpha;
