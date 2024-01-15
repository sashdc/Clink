import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/grid.css";

const SearchResults = () => {
  const [cocktailsIngredient, setCocktails] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.error(error));
  }, [searchTerm]);

  console.log(cocktailsIngredient);

  return (
    <>
      {cocktailsIngredient.length > 0 ? (
        <div className="grid-page">
          <h1 className="section-heading">
            Results with {searchTerm} as an ingredient
          </h1>

          <div className="">
            {/* return section if cocktails hs data but not if null */}

            <ul className="grid-section">
              {cocktailsIngredient.map((cocktail) => (
                <div className="grid-item animate__animated animate__bounceIn">
                  <Link to={`/${cocktail.strDrink}`}>
                    <img
                      src={cocktail.strDrinkThumb}
                      alt={cocktail.strDrink}
                      className="rounded"
                      height="200px"
                    />

                    <p className="cocktail-name">{cocktail.strDrink} </p>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchResults;
