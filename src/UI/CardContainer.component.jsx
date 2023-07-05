import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { CocktailCard } from "./CocktailCard.component";
import { IngredientCard } from "./IngredientCard";
import Modal from "./Modal";
import axios from "axios";

const CardContainer = (props) => {
  const [modalActive, setModalActive] = useState();
  // const [cocktailDetails, setCocktailDetails] = useState([]);
  const [selected, setSelected] = useState();

  // useEffect(() => {
  //   const getCocktailDetails = async () => {
  //     // console.log(DRINK_ID);
  //     try {
  //       const response = await axios.get(
  //         `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selected}`
  //       );
  //       setCocktailDetails(response.data.drinks);
  //       // set ingredient lookup array to be empty if plan to add one

  //       // let ings = []
  //       // let i=1;
  //       // let ing='strIngredient'
  //       // while (cocktailDetails[`${ing+i}`] !== null && i <= 15) {
  //       //   ings.push(ing+i);
  //       // }

  //       // let measures = []
  //       // i=1;
  //       // let measure='strIngredient'
  //       // while (measure+i !== null && i <= 15) {
  //       //   measure.push(measure+i);
  //       // }
  //       // console.log(ings);
  //       // console.log(measures);
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     }
  //   };

  //   getCocktailDetails();
  // }, [selected]);

  const showCocktailDetails = async () => {
    let cocktailDetails = [];
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selected}`
      );
      cocktailDetails = (response.data.drinks);
      // set ingredient lookup array to be empty if plan to add one

      // let ings = []
      // let i=1;
      // let ing='strIngredient'
      // while (cocktailDetails[`${ing+i}`] !== null && i <= 15) {
      //   ings.push(ing+i);
      // }

      // let measures = []
      // i=1;
      // let measure='strIngredient'
      // while (measure+i !== null && i <= 15) {
      //   measure.push(measure+i);
      // }
      // console.log(ings);
      // console.log(measures);
    } catch (error) {
      console.log("Error: ", error);
    }

    setModalActive({
      title: cocktailDetails[0].strDrink,
      a: cocktailDetails[0].strAlcoholic,
      cat: cocktailDetails[0].strCategory,
      ins: cocktailDetails[0].strInstructions,
    });
  };

  const clickHandler = (DRINK_ID) => {
    setSelected(DRINK_ID);
    showCocktailDetails();
  };

  const hideModal = () => {
    setModalActive(null);
  };

  return (
    <div className="flex container mx-auto py-8 justify-center">
      <div className="grid grid-cols-4 gap-4">
        {modalActive && (
          <Modal
            title={modalActive.title}
            a={modalActive.a}
            cat={modalActive.cat}
            ins={modalActive.ins}
            onConfirm={hideModal}
          />
        )}
        {props.cocktails === null || props.ingredients === null ? (
          <div>Nothing found...</div>
        ) : props.cocktails.length > 0 ? (
          props.cocktails.map((cocktail) => (
            <div
              key={cocktail.idDrink ? cocktail.idDrink : Math.random.toString()}
            >
              <CocktailCard
                id={cocktail.idDrink}
                name={cocktail.strDrink}
                img={cocktail.strDrinkThumb}
                alcohol={cocktail.strAlcoholic}
                category={cocktail.strCategory}
                tags={cocktail.strTags}
                onClick={clickHandler}
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
                // onClick={showModal}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardContainer;
