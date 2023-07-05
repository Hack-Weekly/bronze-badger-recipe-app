import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  Fragment,
} from "react";
import { CocktailCard } from "./CocktailCard.component";
import { IngredientCard } from "./IngredientCard";

const CardContainer = (props) => {
  return (
    <div className="flex container mx-auto py-8 justify-center">
      <div className="grid grid-cols-4 gap-4">
        {}
        {props.cocktails === null || props.ingredients === null ? (
          <div>Nothing found...</div>
        ) : props.cocktails.length > 0 ? (
          props.cocktails.map((cocktail) => (
            <div
              key={cocktail.idDrink ? cocktail.idDrink : Math.random.toString()}
            >
              <CocktailCard
                name={cocktail.strDrink}
                img={cocktail.strDrinkThumb}
                alcohol={cocktail.strAlcoholic}
                tags={cocktail.strTags}
              />
            </div>
          ))
        ) : (
          props.ingredients.map((ingredient) => (
            <div
              key={
                ingredient.idIngredient
                  ? ingredient.idIngredient
                  : Math.random.toString()
              }
            >
              <IngredientCard
                name={ingredient.strIngredient}
                type={ingredient.strType}
                alcohol={ingredient.strAlcohol}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardContainer;
