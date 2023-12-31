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
  const {drinkName,setDrinkCarouselImgUrl,drinkCarouselImgUrl} = useContext(DrinkContext)
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
        );
        setCocktails(data.drinks.slice(0, 20));
        data.drinks.slice(0,10).map(el=>{
          setDrinkCarouselImgUrl(prev=>{
            return [...prev,el.strDrinkThumb]
          })
        })
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    
    setDrinkCarouselImgUrl([])
    fetchData();
  }, [drinkName]);
  return (
    <Fragment>
      <Navbar />
      <main className="h-full overflow-x-auto p-5">
        <Carousel images={drinkCarouselImgUrl} />
        <div className="flex flex-wrap overflow-x-auto justify-around">
          {cocktails.length > 0 ? (
              <CardContainer cocktails={cocktails} />
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
