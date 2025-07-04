import React from 'react'
import FoodLogo from '../assets/foodlogo.png'
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
    <div className='grid grid-cols-2 sm:grid-cols-3 dark:bg-black dark:text-white  py-4 mb-1' >
        <div className='px-8'>
           <a href="#"
                        className='flex items-center font-bold text-2xl sm:text-3xl hover:scale-105 duration-150 '>
                          <img src={FoodLogo} alt="foodlogo"
                          className='w-24 rounded-full shadow-md px-5 m-1 p-2 object-cover  '/>
                          Foodie
                      </a>
              <p className='sticky text-sm text-gray-400 m-2 justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.</p>

              <div className='flex items-center gap-2'>
                 <FaLocationArrow className='text-primary text-lg' />
                 <p className=''>Bangalore, Karnataka</p>
              </div>
             <div className='flex gap-2 items-center mt-2'>
              <IoIosPhonePortrait className='text-lg'/>
              <p>+91 8050332262</p>
             </div>
              
            <div className='flex gap-3 text-xl mt-2 px-1 pb-4'>
              <FaInstagramSquare />
              <FaFacebookSquare />
              <FaLinkedin />
            </div>
        </div>
        <div className=''>
          <h1 className='text-2xl font-bold mb-2 '>Important Links</h1>
          <div  className='flex flex-col gap-2 '>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Login</a>
          </div>
        </div>
        <div className=''>
          <h1 className='text-2xl font-bold mb-2'>Important Links</h1>
          <div  className='flex flex-col gap-2'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Login</a>
        </div>
        </div>
        
      </div>
      <div className='justify-center text-center items-center dark:bg-black dark:text-white p-4 '>
          <p className='text-lg'>@copyright 2024 All rights reserved || Made with ❤️ by Dilshad</p>
        </div>
    </div>
  )
}

export default Footer
