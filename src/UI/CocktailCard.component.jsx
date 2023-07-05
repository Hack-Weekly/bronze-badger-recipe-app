import React from "react";

export const CocktailCard = ((props) => {
  const { name, img, alcohol, category, tags } = props;

  const clickHandler = () => {
    props.onClick(props.id);
  };

  return (
    <div
      className="m-3 p-5 flex flex-col bg-primary-color w-72 h-96 rounded-lg hover:bg-primary-hover hover:drop-shadow-md"
      onClick={clickHandler}
    >
      <img
        className="h-3/5 rounded-md bg-secondary-color"
        src={`${img ? img : "/cocktail.svg"}`}
      />
      <div className=" overflow-auto flex flex-col text-primary-bodyText">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="overflow-visible">{alcohol}</p>
        <p className="overflow-visible">{category}</p>
        <div className="flex">
        <p className="overflow-visible text-xs my-2 italic">{tags}</p>
        </div>
      </div>
    </div>
  );
});

        