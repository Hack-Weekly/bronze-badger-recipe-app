import { Fragment, useContext } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer.component";
import Carousel from "./components/Carousel.component";
import Footer from "./components/Footer.component";
import { Navbar } from "./components/Navbar.component";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DrinkContext } from "./context/drinks.context";

function App() {
  const {drinkName} = useContext(DrinkContext)
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
        );
        setCocktails(data.drinks.slice(0, 20));
          console.log(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, [drinkName]);

  return (
    <Fragment>
      <Navbar />
      <main className="h-full overflow-x-auto p-5">
        <Carousel images={[]} />
        <div className="flex flex-wrap overflow-x-auto justify-around">
          {cocktails.length > 0 ? (
            <div>
              <CardContainer cocktails={cocktails} />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
