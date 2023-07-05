import React from "react";
import { Card } from "./Card.component";

const CardContainer = (props) => {
  return (
    <div className="grid grid-cols-4 gap-4">
        {props.cocktails.map((cocktail) => (
          <div key={cocktail.idDrink ? cocktail.idDrink : Math.random.toString()}>
            <Card name={cocktail.strDrink} img={cocktail.strDrinkThumb} tags={cocktail.strTags} alcohol={cocktail.strAlcoholic} />
          </div>
        ))}
      </div>
  );
};

export default CardContainer;
