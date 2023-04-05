// import logo from './logo.svg'; 
import { useState } from "react";
import './App.css';
import { SearchBar } from "./components/SearchBar";

function App() {
  
  const addSum = (Hindi, English) => {
    
    let result = Hindi + English
    return result;
   }
   
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar />

        <div>SearchResults</div>
      </div>
    </div>
  );
}

export default App;
