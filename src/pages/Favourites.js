// Importing necessary React hooks and components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/favourites.css";
import "animate.css";
import NavTabs from "../components/NavTabs";
import Search from "../components/Search";
import Shaker from "../components/Shaker";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve favorites from local storage
    const favorites = JSON.parse(localStorage.getItem("favourites")) || [];

    async function fetchData() {
      const details = await fetchFavoriteDrinkDetails(favorites);
      setFavoriteDrinkDetails(details);
      setLoading(false); // Set loading to false when data is loaded
    }

    fetchData();
  }, []);

  return (
    <div>
      <img
        className="background"
        src="./images/bottles.jpg"
        alt="bottles behind a bar"
      />
      <NavTabs />
      <Search />
      <h1 className="section-heading">Your Favourite Drinks</h1>
      <div className={`grid-section 'animate__animated animate__fadeIn' : ''}`}>
        {loading ? (
          // Render loading animation here
          <div className="loading-animation">
            <Shaker />
          </div>
        ) : (
          // Render favorite drinks when data is loaded
          <>
            {favoriteDrinkDetails.map((drink) => (
              // render a card which has the image, and the name of the drink
              <Link key={drink.idDrink} to={`/${drink.strDrink}`}>
                <div className="fav-card animate__animated animate__bounceIn">
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <h2>{drink.strDrink}</h2>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default FavoriteDrinks;
