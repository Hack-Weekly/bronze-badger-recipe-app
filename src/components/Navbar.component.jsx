import React, { useContext, useEffect, useState } from 'react'
import { DrinkContext } from '../context/drinks.context';
import { Input } from './Input.component'

export const Navbar = () => {
  const {setDrinkName} = useContext(DrinkContext)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(inputValue);
      setDrinkName(inputValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, 500]);

  return (
    <nav className="bg-primary-color-light dark:bg-primary-color-dark dark:text-secondary-color-dark  w-screen mb-auto flex items-center px-2 border-b-2 dark:border-secondary-color-dark border-secondary-color-light">
        <a className='flex mr-auto items-center hover:text-primary-text-light transition-colors duration-300' href='/'>
            <img className=' px-2 w-16 h-16' src='/drink.svg' alt='logo'/>
            <h2 className='text-2xl font-Marker'>Badger Cocktails</h2>
        </a>
        <div className='md:hidden'>
          <Input variant='primary' size='sm' placeholder='Search for drink' value={inputValue} onChange={handleInputChange}/>
        </div>
        <div className='hidden md:block'>
          <Input variant='primary' size='md' placeholder='Search for drink' value={inputValue} onChange={handleInputChange}/>
        </div>
    </nav>
  )
}