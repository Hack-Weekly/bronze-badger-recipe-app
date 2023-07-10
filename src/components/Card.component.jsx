import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Modal } from './Modal.component'

const domElement = document.getElementById('root')
export const Card = ({cocktail}) => {
  const {strDrink:name,strDrinkThumb:img,strTags:tags,strAlcoholic:alcohol} = cocktail
  const [stateModal, setStateModal] = useState(false);
  const openModal = () => setStateModal(true);
  const closeModal = () =>{
    setStateModal(false)};
  return (
    <>
    <div id='card' className='m-3 p-5 flex flex-col bg-slate-50 dark:bg-cardBg w-72 h-80 rounded-lg drop-shadow-md hover:drop-shadow-2xl dark:drop-shadow-darkMd dark:hover:drop-shadow-dark2xl transition-shadow duration-300'
    onClick={openModal}>
      <img className='h-3/5 w-auto rounded-md bg-secondary-color-light dark:bg-secondary-color-dark' src={`${img ? img : '/cocktail.svg'}`}/>
      <div className='flex flex-col'>
        <h2 className='font-Marker text-3xl font-bold text-primary-color-light dark:text-secondary-color-dark'>{name}</h2>
        <p className='h-fit break-all text-ellipsis text-slate-900 dark:text-primary-text-light'>{tags}</p>
        <p className='h-fit break-all text-ellipsis text-slate-900 dark:text-primary-text-light'>{alcohol}</p>
      </div>
    </div>
    {stateModal &&
        createPortal(
          <Modal closebtn={closeModal} cocktail={cocktail}/>,
          domElement,cocktail.idDrink
        )}
    </>
  )
}
