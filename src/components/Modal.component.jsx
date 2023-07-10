import React from "react";
import { Button } from "./Button.component";

function transformObjectToArray(obj) {
  const transformedArray = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (obj[ingredientKey] !== null) {
      transformedArray.push([obj[ingredientKey], obj[measureKey]]);
    }
  }

  return transformedArray;
}

export const Modal = (props) => {
  const { closebtn, cocktail } = props;
  const {
    strDrink,
    strAlcoholic,
    strCategory,
    strInstructions,
    strDrinkThumb,
  } = cocktail;
  const ingredients = transformObjectToArray(cocktail);

  return (
    <div
      className="absolute w-full h-full bg-slate-900/80 flex flex-col items-center justify-center"
      onClick={closebtn}
    >
      <div
        className="bg-cardBg w-5/6 h-fit p-2 md:w-3/4 md:p-8 flex flex-col justify-between cursor-default text-primary-text-light rounded-xl drop-shadow-dark2xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex">
          <div className="flex flex-col w-1/3">
            <img className="p-1 md:p-2" src={strDrinkThumb} alt={strDrink} />
            <ul className="text-sm md:text-lg flex flex-col items-start justify-center divide-y">
              {ingredients.map((el) => {
                if (!!el[1]) {
                  return (
                    <li className="w-full my-1" key={`${el[0]}${el[1]}`}>{`${el[0]}: ${el[1]}`}</li>
                  );
                }
                return <li>{el[0]}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col w-2/3 justify-start items-center">
          <h2 className="ml-3 text-lg lg:text-6xl font-Marker text-secondary-color-dark drop-shadow-xl">
              {strDrink}
            </h2>
            <p className="my-1 text-sm md:text-base text-center">{`${strAlcoholic}, ${strCategory}`}</p>
            
            <p className="text-xs md:text-lg text-center">{strInstructions}</p>
          </div>
        </div>
        <Button variant="primary" size="md" onClick={closebtn}>
          Close
        </Button>
      </div>
    </div>
  );
};
