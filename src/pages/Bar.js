import React from "react";

const Bar = () => {
  let ingredients = [];
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
  fetch(apiUrl)
    .then((res) => res.json())
    .then(
      // map over results and extract each item
      (result) => result.drinks.map((item) => ingredients.push(item.strIngredient1))
    );
  console.log(ingredients);
  return (
    <div>
        <h1>Bar Items</h1>
        <ol>
      {ingredients.map((reptile) => (
        <li>{reptile}</li>
      ))}
    </ol>
    </div>
  );
};

export default Bar;
