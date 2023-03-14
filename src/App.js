import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Random from './pages/Random';
// import Layout from "./components/Layout";

import React from "react";
import Landing from "./pages/Landing";
import List from "./pages/List";
import Bar from "./pages/Bar";


function App() {
  return (
  <div>

          <Router>
            <Routes>
            <Route path="/" element={<Landing />} />

             <Route path="/random" element={<Random />} />
             <Route path="/List" element={<List />} />
             <Route path="/Bar" element={<Bar />} />

          </Routes>
          </Router>
  </div>
)}



export default App;
