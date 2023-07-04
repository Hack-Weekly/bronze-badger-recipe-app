import "./App.css";
import CardContainer from "./components/CardContainer.component";
import React, { useState, useEffect, useRef } from "react";
import Search from "./components/Search.component";
import axios from "axios";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [queryType, setQueryType] = useState("");
  const [queryInput, setQueryInput] = useState("");

  // const [tempDrinks, setTempDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        );
        setCocktails(response.data.drinks.slice(0, 20));
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (queryType === "1a") {
        console.log("searched in 1a");
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryInput}`
          );
          setCocktails(response.data.drinks);
        } catch (error) {
          console.error("Error: ", error);
        }
      } else if (queryType === "1b") {
        console.log("searched in 1b");
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${queryInput}`
          );
          setIngredients(response.data.ingredients);
        } catch (error) {
          console.error("Error: ", error);
        }
      }
    };

    getData();
  }, [queryType, queryInput]);

  const handleSearchType = (searchType, searchInput) => {
    setQueryType(searchType);
    setQueryInput(searchInput);
  };

  return (
    <>
      <div className="mx-4 my-4 max-w-screen-md">
        <Search query={handleSearchType} />
      </div>

      <div>
        {cocktails.length > 0 ? (
          <div>
            <CardContainer cocktails={cocktails} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default App;
