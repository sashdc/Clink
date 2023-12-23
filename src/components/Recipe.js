// Importing necessary React hooks and components
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toJpeg } from "html-to-image";
// import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons';


// Creating a functional component Recipe
const Recipe = () => {
  // Extracting the cocktail parameter from the URL path
  const { cocktail } = useParams();

  // Extracting the location object from the current URL path
  const location = useLocation();

  // load or create favourites array
  let favourites = JSON.parse(localStorage.getItem('favourites')) || [];


  // Storing the current page URL path in a variable
  const page = location.pathname;

  // Setting up the API URL as a variable
  let apiUrl;

  // Setting up state using React hooks for error handling, data loading status, and drink data
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [drink, setDrink] = useState();

  // Ref for the recipe card element
  const recipeCardRef = useRef(null);

  // Conditional statement to set the API URL based on the current page URL path
  if (page === "/Random") {
    apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  } else {
    apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;
  }

  // useEffect hook to fetch data from the API when the component mounts and when the apiUrl variable changes
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setDrink(result.drinks[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [apiUrl]);

  const saveRecipeCardAsJpeg = () => {
    toJpeg(recipeCardRef.current, { quality: 1 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `${drink.strDrink}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };



  // Conditional rendering based on error handling and data loading status
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div></div>;
  } else {
    // Creating an ingredients array and loop through drink data to add to the array
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measurement = drink[`strMeasure${i}`];
      if (ingredient && ingredient !== " " && ingredient !== "") {
        ingredients.push(`${ingredient} - ${measurement}`);
      }
    }

    const saveRecipeCardAsFav = () => {
      // save the recipe card to a favourites section using it's id 
      console.log(`Cocktail id#${drink.idDrink}saved to favourites`);
      // check if array contains drink.idDrink
      if (favourites.includes(drink.idDrink)) {
        console.log("already in favourites");
        return;
      }
      // if not, add it to the array
      favourites.push(drink.idDrink);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    // Splitting drink instructions by period and filtering empty strings to create a list
    const instructionsList = drink.strInstructions
      .split(". ")
      .filter((sentence) => sentence !== "");

    // Rendering the drink recipe with drink data and the ingredients and instructions lists
    return (
      <div className="recipe-page">
        <div className="recipe-cont">
          <div>
            <div
              className="drink-card animate__animated animate__jackInTheBox"
              ref={recipeCardRef}
            >
              <h1>{drink.strDrink}</h1>         
              <FontAwesomeIcon className="unfave-heart" icon={outlineHeart} onClick={saveRecipeCardAsFav} />


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
          {/* create a button that saves the current recipe to a favourites section */}
          {/* <button className="save-jpeg" onClick={saveRecipeCardAsFav}>
            Save to Favourites
          </button> */}
        </div>
      </div>
    );
  }
};

export default Recipe;
