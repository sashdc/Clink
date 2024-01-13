// Recipe.js
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toJpeg } from "html-to-image";
import FavoriteButton from "./FavoriteButton";

const Recipe = () => {
  const { cocktail } = useParams();
  const location = useLocation();
  const page = location.pathname;

  // Set up apiUrl based on the page
  let apiUrl;
  if (page === "/Random") {
    apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  } else {
    apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;
  }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [drink, setDrink] = useState();
  const [favourites, setFavourites] = useState([]);

  const recipeCardRef = useRef(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDrink(result.drinks[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [apiUrl]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavorites);
  }, []);

  const saveRecipeCardAsFav = () => {
    if (favourites.includes(drink.idDrink)) {
      alert("This recipe is already in your favourites");
      return;
    }
    setFavourites([...favourites, drink.idDrink]);
    localStorage.setItem(
      "favourites",
      JSON.stringify([...favourites, drink.idDrink])
    );
  };

  const removeRecipeCardFromFav = () => {
    const indexToRemove = favourites.indexOf(drink.idDrink);
    if (indexToRemove !== -1) {
      const newFavourites = [...favourites];
      newFavourites.splice(indexToRemove, 1);
      setFavourites(newFavourites);
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
    }
  };

  const saveRecipeCardAsJpeg = () => {
    toJpeg(recipeCardRef.current, { quality: 1 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `${drink.strDrink}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  } else {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measurement = drink[`strMeasure${i}`];
      if (ingredient && ingredient !== " " && ingredient !== "") {
        ingredients.push(`${ingredient} - ${measurement}`);
      }
    }

    const instructionsList = drink.strInstructions
      .split(". ")
      .filter((sentence) => sentence !== "");

    return (
      <div className="recipe-page">
         <img
        className="background"
        src="../images/bar.webp"
        alt="a bar with bottles on the shelves lit with red neon bar sign"
      />
        <div className="recipe-cont">
          <div>
            <div
              className="drink-card animate__animated animate__jackInTheBox"
              ref={recipeCardRef}
            >
              <h1>{drink.strDrink}</h1>
              <FavoriteButton
                isFavorited={favourites.includes(drink.idDrink)}
                onFavoriteToggle={() => {
                  if (favourites.includes(drink.idDrink)) {
                    removeRecipeCardFromFav();
                  } else {
                    saveRecipeCardAsFav();
                  }
                }}
              />
              <h5>
                {drink.strCategory} ({drink.strAlcoholic})
              </h5>
              <img
                className="drink-image animate__animated animate__jello"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              ></img>
              <br></br>
              <ul className="card-ingredients">
                <b> {drink.strGlass}</b>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <ul className="instructions-list">
                {instructionsList.map((sentence, index) => (
                  <li key={index}>{sentence}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className="save-jpeg" onClick={saveRecipeCardAsJpeg}>
            Save to device
          </button>
        </div>
      </div>
    );
  }
};

export default Recipe;
