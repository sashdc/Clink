import React from 'react'
// import shaker gif from src assets folder
import shakergif from '../assets/images/shaker.gif'
import '../styles/shaker.css'

const Shaker = () => {
  return (
    <div className='loading-backround'>
        <img className = "grid-section" src={shakergif} alt="shaker" />
    </div>

  )
}

export default Shaker