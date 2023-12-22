// Importing necessary React hooks and components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/favourites.css";

// Function to fetch drink details by id
async function fetchDrinkDetails(id) {
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if the request was successful
    if (response.ok) {
      return data.drinks[0]; // Assuming the API returns an array of drinks, take the first item
    } else {
      console.error("Error fetching drink details:", data.message);
      return null;
    }
  } catch (error) {
    console.error("Error fetching drink details:", error.message);
    return null;
  }
}

// Function to fetch details for all favorite drinks
async function fetchFavoriteDrinkDetails(favorites) {
  const favoriteDrinkDetails = [];

  for (const id of favorites) {
    const drinkDetails = await fetchDrinkDetails(id);
    if (drinkDetails) {
      favoriteDrinkDetails.push(drinkDetails);
    }
  }

  return favoriteDrinkDetails;
}

// Example component
function FavoriteDrinks() {
  const [favoriteDrinkDetails, setFavoriteDrinkDetails] = useState([]);
  
  useEffect(() => {
    // Retrieve favorites from local storage
    const favorites = JSON.parse(localStorage.getItem('favourites')) || [];

    async function fetchData() {
      const details = await fetchFavoriteDrinkDetails(favorites);
      setFavoriteDrinkDetails(details);
    }

    fetchData();
  }, []);

  return (
    <div>
                    <img className="background" src="./images/bottles.jpg" alt="bottles behind a bar"/>

      <h1>Favorite Drinks</h1>
      <div className="fav-container">
        {favoriteDrinkDetails.map((drink) => (
            // render a card which has the image, and the name of the drink
            <div className="fav-card">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <h2>{drink.strDrink}</h2>
            </div>

        //   <li key={drink.idDrink}>
        //     <Link to={`/cocktails/${drink.idDrink}`}>{drink.strDrink}</Link>
        //   </li>
        ))}
        </div>
    </div>
  );
}

export default FavoriteDrinks;
