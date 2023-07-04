import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  Fragment,
} from "react";
import { Card } from "./Card.component";

const CardContainer = (props) => {
  return (
    <div className="flex container mx-auto py-8 justify-center">
      <div className="grid grid-cols-4 gap-4">
        {props.cocktails.map((cocktail) => (
          <div key={cocktail.idDrink ? cocktail.idDrink : Math.random.toString()}>
            <Card name={cocktail.strDrink} img={cocktail.strDrinkThumb} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
