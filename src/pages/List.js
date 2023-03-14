import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const List = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      {letters.map((letter, index) => (
      <Link to={`/cocktails/${letter}`}>
      <button key={index}>{letter}</button>
      </Link>
      ))}
    </div>
  );
};

export default List;
