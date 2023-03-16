import React from 'react'
import { Link } from "react-router-dom";
import "../styles/navtabs.css";

const NavTabs = () => {
  return (
    <div className="navtabs"> 
    {/* render only if page location is notthe same as link */}
     <Link to="/"> <h2 id="nav-btn">Back Home</h2>
      </Link>
      <Link to="/List"> <h2 id="nav-btn">A-Z</h2>
      </Link>
      <Link to="/Bar"> <h2 id="nav-btn">What's in your bar?</h2>
      </Link>
</div>  )
}

export default NavTabs