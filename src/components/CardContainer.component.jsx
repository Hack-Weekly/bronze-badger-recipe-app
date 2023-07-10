import React from "react";
import { Card } from "./Card.component";

const CardContainer = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {props.cocktails.map((cocktail) => (
          <div key={cocktail.idDrink ? cocktail.idDrink : Math.random.toString()}>
            <Card cocktail={cocktail}/>
          </div>
        ))}
      </div>
  );
};

export default CardContainer;
