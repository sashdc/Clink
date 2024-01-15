import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavTabs from "../components/NavTabs";
import "../styles/grid.css";
import Search from "../components/Search";
import IngredientSearch from "../components/IngredientSearch";

const SearchResults = () => {
  const [cocktails, setCocktails] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.error(error));
  }, [searchTerm]);

  console.log(cocktails);

  return (
    <div className="grid-page">
      {/* <img
        className="background"
        src="../images/bar.webp"
        alt="bottles in a bar"
      /> */}
      <NavTabs />
      <Search />

      <h1 className="section-heading">Results with {searchTerm} in the name</h1>

      <div className="">
        {/* return section if cocktails hs data but not if null */}
        {cocktails ? (
          <ul className="grid-section">
            {cocktails.map((cocktail) => (
              <div className="grid-item animate__animated animate__bounceIn">
                <Link to={`/${cocktail.strDrink}`}>
                  <img
                    src={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                    className="rounded"
                    height="200px"
                  />
                  {/* if drnk is alcoholic show coktail, or mocktail if not */}
                  {cocktail.strAlcoholic === "Alcoholic" ? (
                    <p className="cocktail-name">
                      {cocktail.strDrink} (Cocktail)
                    </p>
                  ) : (
                    <p className="cocktail-name">
                      {cocktail.strDrink} (Mocktail)
                    </p>
                  )}
                  {/* <li key={cocktail.idDrink}>{cocktail.strDrink}({cocktail.strAlcoholic})</li> */}
                </Link>
              </div>
            ))}
          </ul>
        ) : (
          <div className="grid-section  no-result">
            {" "}
            No results found for {searchTerm}. Please try searching again with a
            different term
          </div>
        )}
      </div>
      <IngredientSearch />
    </div>
  );
};

export default SearchResults;
