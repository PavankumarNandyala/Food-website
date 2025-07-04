import React from 'react'
import Img1 from '../assets/biryani1.png'
import Img2 from '../assets/biriyani5.png'
import { FaLock } from 'react-icons/fa6'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
const ImgData=[
    {
        id:1,
        img:Img1,
        title:"Chicken Biriyani",
        Description:"Biryani is a flavorful, mixed rice dish originating from South Asia, typically made with fragrant basmati rice, meat (chicken, goat, lamb, beef), or seafood, and a blend of aromatic spices",

    },
    {
        id:2,
        img:Img1,
        title:"Chilli Chicken",
        Description:"Biryani is a flavorful, mixed rice dish originating from South Asia, typically made with fragrant basmati rice, meat (chicken, goat, lamb, beef), or seafood, and a blend of aromatic spices",

    },
    {
        id:3,
        img:Img1,
        title:"Rice ",
        Description:"Biryani is a flavorful, mixed rice dish originating from South Asia, typically made with fragrant basmati rice, meat (chicken, goat, lamb, beef), or seafood, and a blend of aromatic spices",

    },

]

const Services = () => {
  return (
    <div 
    className='py-10 dark:bg-gray-800 dark:text-white'>
      <div className=' container'>
        {/* Hearder Section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto '>
            <p data-aos ="fade-up" className='text-sm text-orange-500'>Our Services</p>
            <h1 className='text-3xl font-bold'>Services</h1>
            <p data-aos ="fade-up" className='text-sm text-gray-500 line-clamp-3 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?</p>
        </div>
        {/* Image section */}
        <div>
            <div
  data-aos="fade-up"
  className="flex flex-wrap gap-4 items-center justify-center"
>
  {ImgData.map((data, index) => (
    <div
      key={index}
      className="shadow-md rounded-2xl hover:bg-primary hover:text-white flex flex-col items-center p-4 w-[250px]"
    >
      <img
        src={data.img}
        alt=""
        className="h-[200px] w-[250px] object-cover rounded-xl -translate-y-1/4 hover:animate-spin-slow rotate-45"
      />

      <h1 className="text-lg font-bold text-center mt-2">{data.title}</h1>
      
      <p className="text-sm text-gray-500 hover:text-white line-clamp-2 text-center mt-2">
        {data.Description}
      </p>
    </div>
  ))}
</div>

        </div>
        <div className='items-center justify-center'>
            <div data-aos="zoom-in" className='flex mt-20 '>
                <img src={Img2} alt=""
                className='h-[200px]'/>
                <div className='items-center justify-center px-8 '>
                     <h1 className='text-2xl font-bold'>Lorem ipsum dolor</h1>
                     <p className='text-sm text-gray-500 pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                     <p className='text-sm text-gray-500 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.</p>
                  <div className='flex gap-4 pt-6'>
                     <div>
                      <GrSecure className='text-4xl h-20 w-20 shadow-md rounded-full p-5
                       bg-violet-100 dark: bg-violet-400 '/>

                     </div>
                     <div>
                      <IoFastFood className='text-4xl h-20 w-20 shadow-md rounded-full p-5
                       bg-orange-100 dark:bg-orange-400 '/>

                     </div>
                     <div>
                      <GiFoodTruck className='text-4xl h-20 w-20 shadow-md rounded-full p-5
                       bg-green-100 dark:bg-green-400 '/>

                     </div>
                  </div>
                     <div>
                        <button className='text-white bg-primary px-3 py-2 mt-4 font-serif rounded-full
                        hover:scale-105 duration-200 '>Order Now</button>
                     </div>
                     

                </div>
               
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services
