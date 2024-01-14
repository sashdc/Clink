import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/favourites.css";
import "animate.css";
import NavTabs from "../components/NavTabs";
import Search from "../components/Search";
import Shaker from "../components/Shaker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Function to fetch drink details by id
async function fetchDrinkDetails(id) {
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data.drinks[0];
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

  const removeFavorite = async (id) => {
    let favorites = JSON.parse(localStorage.getItem("favourites")) || [];
    favorites = favorites.filter((favoriteId) => favoriteId !== id);
    localStorage.setItem("favourites", JSON.stringify(favorites));

    // Add fade-out animation class to the removed item
    const updatedDetails = favoriteDrinkDetails.map((drink) =>
      drink.idDrink === id ? { ...drink, removed: true } : drink
    );

    setFavoriteDrinkDetails(updatedDetails);

    // Wait for the animation to complete before fetching updated data
    await new Promise((resolve) => setTimeout(resolve, 100));

    fetchData();
  };

  const fetchData = async () => {
    const favorites = JSON.parse(localStorage.getItem("favourites")) || [];
    const details = await fetchFavoriteDrinkDetails(favorites);
    setFavoriteDrinkDetails(
      details.map((drink) => ({ ...drink, removed: false }))
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <img
        className="background"
        src="../images/bar.webp"
        alt="bottles in a bar"
      /> */}
      <div className="grid-page">
        <NavTabs />
        <Search />
        <h1 className="section-heading">Your Favourite Drinks</h1>
        <div className={`grid-section animate__animated animate__fadeIn`}>
          {loading ? (
            <div className="loading-animation">
              <Shaker />
            </div>
          ) : (
            <>
              {favoriteDrinkDetails.length === 0 && (
                <div className="no-results">
                  <h2>You have no favourite drinks yet</h2>
                  <p>
                    Click the heart icon on a drink to add it to your favourites
                  </p>
                </div>
              )}
              {favoriteDrinkDetails.map((drink) => (
                <div
                  key={drink.idDrink}
                  className={`fav-card animate__animated ${
                    drink.removed ? "animate__fadeOutDown" : "animate__bounceIn"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="heart-icon remove-fav"
                    title="remove from favourites"
                    onClick={() => removeFavorite(drink.idDrink)}
                  />
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <Link to={`/${drink.strDrink}`} key={drink.idDrink}>
                    <h2>{drink.strDrink}</h2>
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoriteDrinks;
