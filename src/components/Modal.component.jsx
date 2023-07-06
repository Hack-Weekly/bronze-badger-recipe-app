import React from 'react'
import { Button } from './Button.component'

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
    const {closebtn,cocktail} = props
    const {strDrink,strAlcoholic,strCategory,strInstructions,strDrinkThumb} = cocktail
    const ingredients = transformObjectToArray(cocktail)
    console.log(ingredients);
    
  return (
    <div className="absolute w-full h-full bg-slate-900/80 flex flex-col items-center justify-center" onClick={closebtn}>
        <div className='bg-cardBg w-2/3 h-2/3 p-12 flex flex-col justify-between cursor-default text-primary-text-light rounded-xl drop-shadow-dark2xl' onClick={(e)=>{
            e.stopPropagation()
        }}>
            {/* name */}
            <h2 className='ml-3 text-6xl font-Marker text-secondary-color-dark drop-shadow-xl'>{strDrink}</h2>
            {/* category ex:Alcoholic shot */}
            <p className='my-1'>{`${strAlcoholic}, ${strCategory}`}</p>
            <div className='flex'>
                <img className='w-1/3' src={strDrinkThumb} alt={strDrink}/>
                {/* ingredients */}
                <ul className='text-xl w-2/3 flex flex-col items-center'>
                    {ingredients.map(el=>{
                        if(!!el[1]){
                            return (<li>{`${el[0]}: ${el[1]}`}</li>)
                        }
                        return(<li>{el[0]}</li>)
                    })}
                </ul>
            </div>
            {/* preperation */}
            <p className='text-lg text-center'>{strInstructions}</p>
            <Button variant='primary' size='md' onClick={closebtn}>Close</Button>
        </div>
    </div>
  )
}
// {
//     "idDrink": "15997",
//     "strDrink": "GG",
//     "strDrinkAlternate": null,
//     "strTags": null,
//     "strVideo": null,
//     "strCategory": "Ordinary Drink",
//     "strIBA": null,
//     "strAlcoholic": "Optional alcohol",
//     "strGlass": "Collins Glass",
//     "strInstructions": "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
//     "strInstructionsES": null,
//     "strInstructionsDE": "Den Galliano-Likör über Eis gießen. Füllen Sie den Rest des Glases mit Ginger Ale und das ist alles, was dazu gehört. Du hast jetzt ein eigenes GG.",
//     "strInstructionsFR": null,
//     "strInstructionsIT": "Versare il liquore Galliano su ghiaccio.\r\nRiempi il resto del bicchiere con ginger ale e questo è tutto.\r\nOra hai il tuo GG personale.",
//     "strInstructionsZH-HANS": null,
//     "strInstructionsZH-HANT": null,
//     "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
//     "strIngredient1": "Galliano",
//     "strIngredient2": "Ginger ale",
//     "strIngredient3": "Ice",
//     "strIngredient4": null,
//     "strIngredient5": null,
//     "strIngredient6": null,
//     "strIngredient7": null,
//     "strIngredient8": null,
//     "strIngredient9": null,
//     "strIngredient10": null,
//     "strIngredient11": null,
//     "strIngredient12": null,
//     "strIngredient13": null,
//     "strIngredient14": null,
//     "strIngredient15": null,
//     "strMeasure1": "2 1/2 shots ",
//     "strMeasure2": null,
//     "strMeasure3": null,
//     "strMeasure4": null,
//     "strMeasure5": null,
//     "strMeasure6": null,
//     "strMeasure7": null,
//     "strMeasure8": null,
//     "strMeasure9": null,
//     "strMeasure10": null,
//     "strMeasure11": null,
//     "strMeasure12": null,
//     "strMeasure13": null,
//     "strMeasure14": null,
//     "strMeasure15": null,
//     "strImageSource": null,
//     "strImageAttribution": null,
//     "strCreativeCommonsConfirmed": "No",
//     "dateModified": "2016-07-18 22:06:00"
// }
