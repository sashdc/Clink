import React, { useState, useEffect } from "react";

const Bar = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ingredients, setIngredients] = useState([]); 
     const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

     useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setIngredients(result.drinks[0]);
              console.log(result)
              console.log(result.drinks[0]);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );
      }, []);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div><div className="drink-card animate__animated animate__jackInTheBox">
          <a href="/random" > <h2>Random Again</h2>
    </a>
    </div>
    </div>
        )}}
export default Bar;
