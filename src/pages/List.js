import React from "react";
import { Link } from 'react-router-dom';
import '../styles/list.css';
import "animate.css";
import NavTabs from "../components/NavTabs";


const List = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="alpha-list ">
  <NavTabs />

      <div className="alpha-grid animate__animated animate__fadeIn">
      {letters.map((letter, index) => (
      <Link to={`/cocktails/${letter}`}>
      <button className="alpha-button " key={index}>{letter}</button>
      </Link>
      ))}
      </div>
    </div>
  );
};

export default List;
