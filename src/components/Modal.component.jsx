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
            <h2 className='ml-3 text-6xl font-Marker text-secondary-color-dark drop-shadow-xl'>{strDrink}</h2>
            <p className='my-1'>{`${strAlcoholic}, ${strCategory}`}</p>
            <div className='flex'>
                <img className='w-1/3' src={strDrinkThumb} alt={strDrink}/>
                <ul className='text-xl w-2/3 flex flex-col items-center'>
                    {ingredients.map(el=>{
                        if(!!el[1]){
                            return (<li>{`${el[0]}: ${el[1]}`}</li>)
                        }
                        return(<li>{el[0]}</li>)
                    })}
                </ul>
            </div>
            <p className='text-lg text-center'>{strInstructions}</p>
            <Button variant='primary' size='md' onClick={closebtn}>Close</Button>
        </div>
    </div>
  )
}
