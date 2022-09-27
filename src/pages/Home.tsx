import React from 'react'
import { Link } from 'react-router-dom';

import { categoriesName } from '../assets/json';

export const Home = () => {

  return (
    <div className='my-6'>

      <div className='w-[80%] h-[80%] text-center m-auto  grid grid-cols-3'>
        {
          categoriesName.map(item => (
            <Link to={item.link}>
              <div className='h-full mr-3 cursor-pointer '>
              
                <div className='h-full w-full relative'>
                
                  <img className='h-[90%] w-full object-cover ' src={item.img} alt="/" />
                  <span className='absolute bottom-8 left-[40%] text-yellow-400 text-xl font-bold tracking-widest  '>{item.name}</span>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
   
  )
};
