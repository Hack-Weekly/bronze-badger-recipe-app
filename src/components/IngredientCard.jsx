import React from 'react';

export const IngredientCard = (props) => {
  const {name,img,type,alcohol} = props
  return (
    <div className='m-3 p-5 flex flex-col bg-secondary-color w-72 h-80 rounded-lg hover:bg-primary-hover hover:drop-shadow-md' {...props}>
      <img className='h-3/5 rounded-md bg-secondary-color' src={`${img ? img : '/cocktail.svg'}`}/>
      <div className=' overflow-auto flex flex-col text-primary-bodyText'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p className='overflow-auto'>{type}</p>
        <p className='overflow-auto'>{alcohol === 'Yes' ? 'Alcohol' : 'Not alcohol'}</p>
      </div>
    </div>
  )
}
