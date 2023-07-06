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
  const [selected, setSelected] = useState();

  const clickHandler = async (DRINK_ID) => {
    setSelected(DRINK_ID);
    setModalActive(true);

    // try {
    //   const response = await axios.get(
    //     `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${DRINK_ID}`
    //   );
    //   setCocktailDetails(response.data.drinks);
    //   console.log(cocktailDetails[0]);
    // } catch (error) {
    //   console.log("Error: ", error);
    // }
  };

  const hideModal = () => {
    setModalActive(false);
  };

  return (
    <div className="flex container mx-auto py-8 justify-center">
      <div className="grid grid-cols-4 gap-4">
        {modalActive && (
          <Modal
            // title={modalActive.title}
            // a={modalActive.a}
            // cat={modalActive.cat}
            // ins={modalActive.ins}
            // details={cocktailDetails[0]}
            id={selected}
            onConfirm={hideModal}
          />
        )}
        {props.cocktails === null || props.ingredients === null ? (
          <div>Nothing found...</div>
        ) : props.cocktails.length > 0 ? (
          props.cocktails.map((cocktail) => (
            <div
              key={
                cocktail.idDrink ? cocktail.idDrink : Math.random().toString()
              }
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
