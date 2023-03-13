import React from 'react'

const Random = () => {
// use Api to get random cocktail
const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
console.log(apiUrl)
fetch(apiUrl)

return (
    <div>random</div>
  )
}

export default Random