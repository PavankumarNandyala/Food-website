import React from 'react'
import biriyani from '../assets/biryani1.png'
import biriyani2 from '../assets/biriyani.png'
import biriyani3 from '../assets/biriyani5.png'
import bgImg from '../assets/vector3.png'
const ImageList=[
    {
        id:1,
        img:biriyani,
    },
    {
        id:2,
        img:biriyani2,
    },
    {
        id:3,
        img:biriyani3,
    }
]
const bgImage={
    backgroundImage:`url(${bgImg})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    height:"100%",
}
const Hero = () => {
   const[imageId,setImageId]=React.useState(biriyani)
  return (
    <div style={bgImage}
    className=' min-h-[550px] sm:min-h-[600px] dark:bg-gray-950 dark:text-white duration-200 
    flex justify-center items-center
   '>
      <div className=' container pb-8 sm:pb-0  '>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          {/* text content section */}
          <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1' >
             <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>Welcome to the <span className='text-orange-500'>Foodie</span>  Zone</h1>
             <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit nihil suscipit iure vero deserunt.</p>
            <div>
               <button className='bg-orange-500 rounded-full py-2 px-4 text-white hover:scale-105 duration-300 font-serif'>Order Now</button>

            </div>
          </div>
          {/* image section */}
          
        <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex  justify-center items-center  relative'>
          {/* main image */}
          <div className='flex justify-center items-center
             h-[300px] sm:[450px] overflow-hidden'>
            <img src={imageId} alt="biriyani1"
             className=' animate-spin-slower 
                         w-[300px] sm:w-[380px] '/>
        </div>
        {/* image list */}
        
          <div className='flex lg:flex-col lg:top-1/4  
                lg:-translate-y-1/2 lg:py-2 justify-center gap-4 px-1  mt-20
                absolute bottom-[0px] lg:-right-10 bg-white/40 rounded-full'>
            {ImageList.map((data)=>(
                    <img key={data.id} src={data.img} alt=""
                    onClick={()=>{
                      setImageId(data.id===1? biriyani:data.id===2 ? biriyani2:biriyani3

                      )
                    }}
                    className='max-w-[80px] h-[80px] object-contain inline-block 
                    hover:scale-110 duration-200 '/>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
