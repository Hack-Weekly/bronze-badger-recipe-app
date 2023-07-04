import React from 'react'
import { Input } from './Input.component'

export const Navbar = () => {
  return (
    <nav className="bg-primary-color-light dark:bg-primary-color-dark  w-screen mb-auto flex items-center px-2">
        <a className='flex mr-auto items-center hover:text-primary-text-light' href='/'>
            <img className=' px-2 w-16 h-16' src='/drink.svg' alt='logo'/>
            <h2 className='text-2xl font-Marker'>Badger Cocktails</h2>
        </a>
        <Input variant='primary' size='md' placeholder='Search for drink'/>
    </nav>
  )
}
