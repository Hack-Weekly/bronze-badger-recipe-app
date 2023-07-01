import React from 'react'

export const Card = (props) => {
  const {cocktailDetails,cocktailName,cocktailImg} = props
  return (
    <div className='m-3 p-5 flex flex-col bg-primary-color w-72 h-80 rounded-lg hover:bg-primary-hover hover:drop-shadow-md' {...props}>
      <img className='h-3/5 rounded-md bg-secondary-color' src={`${cocktailImg ? cocktailImg : '/cocktail.svg'}`}/>
      <div className=' overflow-auto flex flex-col text-primary-bodyText'>
        <h2 className='text-2xl font-bold'>{cocktailName}</h2>
        <p className='overflow-auto'>{cocktailDetails}</p>
      </div>
    </div>
  )
}
