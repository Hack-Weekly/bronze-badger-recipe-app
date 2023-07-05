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
          setIngredients([]);
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
          setCocktails([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      } 
      else if (queryType === "2a") {
        console.log("searched in 2a");
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      }
      else if (queryType === "2b") {
        console.log("searched in 2b");
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${queryInput}`
          );
          setIngredients(response.data.ingredients);
          setCocktails([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      }
      else if (queryType === "3a") {
        console.log("searched in 3a");
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      }
      else if (queryType === "3b") {
        console.log("searched in 3b");
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      }
      else if (queryType === "3c") {
        console.log("searched in 3c");
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
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

  const getRandom = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      setCocktails(response.data.drinks);
      setIngredients([]);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <div className="mx-4 my-4 max-w-screen-md">
        <Search query={handleSearchType} onClick={getRandom} />
      </div>

      <div>
        {cocktails.length > 0 ? (
          <div>
            <CardContainer cocktails={cocktails} ingredients={ingredients} />
          </div>
        ) : (
          <div>
            <CardContainer cocktails={cocktails} ingredients={ingredients} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
