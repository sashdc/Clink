import React from 'react'
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div>Landing
<Link to="/random" > <h2>Random</h2>
</Link>
<Link to="/List" > <h2>List</h2>
</Link>
<Link to="/Bar" > <h2>Bar</h2>
</Link>

    </div>
  )
}

export default Landing