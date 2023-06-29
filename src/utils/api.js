export async function api(item) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita `;

  //   const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${item} `;
  //Bind it with the search input

  const data = await fetch(url);
  const data_json = await data.json();
  console.log(data_json);
}
