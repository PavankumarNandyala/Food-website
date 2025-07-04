import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider=[
  {
    id:1,
    name:"Rohith Sharma",
    Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLiEjfLMzOVXEm087UF_MUGzItzgshd4N8w&s",
    Description:"Rohit Sharma is an Indian international cricketer and the captain of the India national team in ODIs. He is also a former captain in Tests and T20Is.",
  },
  {
   id:2,
    name:"Virat Kohli",
    Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSde8NNQ_4zsM1V0uU8zFBs0vsU7REeKFL_Kg&s",
    Description:"Virat is an Indian international cricketer and the captain of the India national team in ODIs. He is also a former captain in Tests and T20Is.",
  },
   {
   id:3,
    name:"Sachin",
    Img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Sachin-Tendulkar.jpg/250px-Sachin-Tendulkar.jpg",
    Description:"Virat is an Indian international cricketer and the captain of the India national team in ODIs. He is also a former captain in Tests and T20Is.",
  },
]

const Testimonail = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrow:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus:true,
    cssEase:"linear",
  };
  return (
    <div className='dark:bg-gray-800 dark:text-white p-8 py-10'>
      <div className='text-center items-center container max-w-[500px] max-auto '>
        <p  data-aos="zoom-in" className='text-sm text-orange-500'>Testimonial</p>
        <h1 className='text-3xl font-bold'>Testomonial</h1>
        <p  data-aos="zoom-in" className='text-sm text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?</p>
      </div>
      <div>
        {/* testimonial */}
        <div data-aos="fade-up" className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
        <Slider {...settings}>
        {ImgSlider.map((data) => (
          <div
            key={data.id}
            className='flex flex-col justify-center items-center gap-4 text-center bg-primary/10 my-6 dark:bg-gray-800 dark:shadow-white dark:border border-gray-500 relative shadow-lg bg-white rounded-lg px-12 py-4 h-[250px] w-[450px]'
          >
            <img
              data-aos="zoom-in"
              src={data.Img}
              alt=""
              className='w-24 h-24 rounded-full object-cover block mx-auto pt-2'
            />
            <h1 className='text-xl font-bold pt-2'>{data.name}</h1>
            <p className='text-gray-500 text-sm pt-4'>{data.Description}</p>
          </div>
        ))}
      </Slider>
    </div>

      </div>
    </div>
  )
}

export default Testimonail
