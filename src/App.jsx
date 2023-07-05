import { Fragment } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer.component";
import Carousel from "./components/Carousel.component";
import Footer from "./components/Footer.component";
import { Navbar } from "./components/Navbar.component";
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        );
        setCocktails(response.data.drinks.slice(0, 20));
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

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
