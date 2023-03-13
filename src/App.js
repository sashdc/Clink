import './App.css';
// import Random from './pages/Random';
import React, { useState, useEffect } from 'react';


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.drinks[0]);
          console.log(result);
          console.log(items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <h1>Drink Name {items} </h1>
    );
  }
}

// const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
// console.log(apiUrl)
// fetch(apiUrl)
// .then(function (response) {
//   console.log("this is the response")
//   console.log(response)

//   return response.json();
// })
// .then(function (data) {
//   console.log(data)})

//   return (
//     <div className="App">
//       <div>
//         {/* get drink details from api request */}
//         <h1>Drink name </h1>
//         <h2>{data.drinks[0].strName}</h2>
//       </div>
//     </div>
//   );
// }

export default App;
