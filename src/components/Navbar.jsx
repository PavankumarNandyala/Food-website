import React from 'react'
import FoodLogo from '../assets/foodlogo.png'
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'
const Navbar = () => {
  return (
    <div className='bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200'>
      <div className='container sm:py-0'>
        <div className="flex justify-between items-center ">
          <div className=''>
            <a href="#"
              className='flex items-center font-bold text-2xl sm:text-3xl hover:scale-105 duration-150 '>
                <img src={FoodLogo} alt="foodlogo"
                className='w-24 rounded-full shadow-md px-5 m-1 p-2 object-cover  '/>
                Foodie
            </a>
          </div>
          <div className=' flex items-center gap-4'>
            <div>
            <DarkMode/>
          </div>
          <div className='font-serif '>
            <ul className='hidden sm:flex gap-3'>
              <li>
                <a href="#"
                className='inline-block py-4 px-4 hover:text-orange-400  '>Home</a>
              </li>
              <li>
                <a href="#"
                className='inline-block px-4 py-4 hover:text-orange-400'>About</a>
              </li>
              <li>
                <a href="#"
                className='inline-block px-4 py-4 hover:text-orange-400'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='font-serif'>
            <button className='flex gap-2 items-center bg-orange-500 rounded-full px-4 py-1 text-white
            hover:scale-105 duration-300'> Order
              <FaCartShopping />

            </button>
          </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Navbar
